const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')
const config = require('./dev.config.js')


const port = 8000

config.entry.app.unshift(
  'webpack-dev-server/client?http://localhost:' + port + '/',
  'webpack/hot/dev-server')

const devServerConfig = {
  contentBase: path.join(__dirname, '../'),
  hot: false,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    chunks: false,
    colors: true,
    children: false
  },
  watchOptions: {
    poll: true
  },
  publicPath: '/assets/',
  proxy: { '*': 'http://localhost:4000' },
  headers: { 'Access-Control-Allow-Origin': '*' }
}

const server = new WebpackDevServer(webpack(config), devServerConfig)

server.listen(port, function () {
  console.log(`!  🍕  ====  Webpack dev server running at port: `, port)
})
