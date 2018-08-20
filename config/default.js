
const PORT = process.env.PORT || 3000
const SOCKETIO_PORT = 3001

module.exports = {
  serverName: 'jac2-api',
  mongodb: {
    uri: 'mongodb://localhost:27017/jac2',
    options: {
      autoReconnect: true,
      socketTimeoutMS: 30000,
      connectTimeoutMS: 30000,
      keepAlive: 120
    }
  },
  tokenSecret: 'supersecrettoken',
  electron: {
    WIN_URL: 'http://localhost:9080'
  },
  PORT,
  SOCKETIO_PORT
}
