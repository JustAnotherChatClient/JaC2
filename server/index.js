if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'uat') {
  require('./server.bundle.js')
} else {
  require('babel-register')
  require('babel-polyfill')
  require('./server')
}
