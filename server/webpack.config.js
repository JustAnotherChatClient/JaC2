process.env.BABEL_ENV = 'server'
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'server.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'server.bundle.js'
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    extensions: [' ', '.js'],
    modules: [
      '../server',
      '../node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-0']
        }
      }, {
        test: /\.json%/,
        loader: 'json-loader'
      }
    ]
  },
  externals: [nodeExternals()]
}
