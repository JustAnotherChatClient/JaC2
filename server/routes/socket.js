import { Router } from 'express'

const routes = () => {
  const router = new Router()

  router.use('/connect', connection)

  return router
}

const connection = (req, res) => {
  let socketId = []
  const io = req.app.get('socketio')
  // Listen for chat clients
  io.on('connection', function (socket) {
    socketId.push(socket.id)
    if (socketId[0] === socket.id) {
      // remove the connection listener for any subsequent
      // connections with the same ID
      io.removeAllListeners('connection')
    }
    console.log('A socket has connected!', socket.id)
    socket.on('disconnect', function () {
      console.log('A socket disconnected!', socket.id)
    })
    socket.on('chatMessage', function (msg) {
      let chatEntity = { username: socket.username, message: msg }
      // here lets emmit json, with socket.username and message
      io.emit('chatMessage', chatEntity)
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
}

export default routes
