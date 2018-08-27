
import path from 'path'
import http from 'http'

import Express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
// import jwt from 'express-jwt'
import bunyan from 'bunyan'
import bunyanExpressLogger from 'express-bunyan-logger'

import mongoose from 'mongoose'

// import global config
import config from 'config'

// import routes
import router from './routes/router'

// create server singleton
const server = new Express()

// Create socket server
var socketServer = require('http').createServer(server)

// add config to every req via: req.locals.config
server.locals.config = config

// setup server logging
const serverLog = bunyan.createLogger({
  name: config.serverName,
  serializers: {
    err: bunyan.stdSerializers.err
  },
  streams: [{
    type: 'rotating-file',
    path: path.resolve(__dirname, 'logs/server.log'),
    period: '1d',
    count: 7
  }]
})
// access server log in req via: req.locals.serverLog
server.locals.serverLog = serverLog
// access server log anywhere via: import { serverLog } from 'server.js'
export default { serverLog }

// setup access logging
server.use(bunyanExpressLogger({
  name: config.serverName,
  streams: [{
    type: 'rotating-file',
    path: path.resolve(__dirname, 'logs/access.log'),
    period: '1d',
    count: 7
  }]
}))

// database setup
const db = mongoose.connection
server.use((req, res, next) => {
  if (db.readyState !== 1) {
    db.openUri(config.mongodb.uri, config.mongodb.options)
    db.on('error', err => {
      serverLog.error({msg: err.message}, 'MongoDB connection error')
      throw new Error(`unable to connect to database at ${config.mongodb.uri}. Error: ${err.message}`)
    })
  }
  next()
})

// Express setup
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(compression())

server.use(router(router))

/*
server.use((err, req, res, next) => {
  if (err) res.status(500).json({ status: 500, message: 'Internal Server Error' })
  else res.status(404).json({ status: 404, message: 'Not Found' })
})
*/

// TODO setup jwt support
/*
server.use(jwt({
  secret: config.jwtSecret,
  getToken: () => {}
})).unless({path: ['/api/user/login', '/api/user/logout']})
*/

// TODO setup universal error handler
/*
server.use((err, req, res, next) => {

})
*/

// Declare socket.io server instance
var io = require('socket.io')(socketServer)

// Listen for chat clients
io.on('connection', function (socket) {
  console.log('a user connected', socket.username)
  socket.on('disconnect', function () {
    console.log('user disconnected')
  })
  socket.on('chatMessage', function (msg) {
    console.log(socket.username + ': ' + msg)
    io.emit('chatMessage', socket.username + ': ' + msg)
  })
  socket.on('set user', (username) => {
    // we store the username in the socket session for this client
    socket.username = username
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username
    })
    console.log(socket.username, 'Joined the chat')
  })
})

// Chatroom

// io.on('connection', (socket) => {
//   // when the client emits 'new message', this listens and executes
//   socket.on('new message', (data) => {
//     // we tell the client to execute 'new message'
//     socket.broadcast.emit('new message', {
//       username: socket.username,
//       message: data
//     })
//     console.log(socket.username, data)
//   })

//   // when the client emits 'add user', this listens and executes
//   socket.on('add user', (username) => {
//     // we store the username in the socket session for this client
//     socket.username = username
//     // echo globally (all clients) that a person has connected
//     socket.broadcast.emit('user joined', {
//       username: socket.username
//     })
//     console.log(socket.username, 'Joined the chat')
//   })

//   // when the user disconnects.. perform this
//   socket.on('disconnect', () => {
//     // echo globally that this client has left
//     socket.broadcast.emit('user left', {
//       username: socket.username
//     })
//   })
// })

socketServer.listen(config.SOCKETIO_PORT, error => {
  if (!error) {
    serverLog.info(`Started JaC2 socket.io server on port ${config.SOCKETIO_PORT}`)
    console.log(`Running JaC2 socket.io server on port ${config.SOCKETIO_PORT}`)
  }
})

http.createServer(server).listen(config.PORT, error => {
  if (!error) {
    serverLog.info(`Started JaC2 API Server in ${process.env.NODE_ENV} environment on port ${config.PORT}`)
    console.log(`Running JaC2 API Server in ${process.env.NODE_ENV} environment on port ${config.PORT}`)
  }
})
