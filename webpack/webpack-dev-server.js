const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const config = require('./dev.config.js')

config.entry.app.unshift(
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server')

const port = 8080

const devServerConfig = {
  contentBase: path.join(__dirname, '../'),
  hot: false,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    chunks: false,
    colors: true
  },
  watchOptions: {
    poll: true
  },
  publicPath: '/assets/',
  proxy: {'*': 'http://localhost:3000'},
  headers: {'Access-Control-Allow-Origin': '*'}
}

const server = new WebpackDevServer(webpack(config), devServerConfig);

server.listen(port, function() {
  console.log(`!  🍕  ====  Webpack dev server running at port: `, port)
})
