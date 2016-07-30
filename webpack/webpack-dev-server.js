var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var config = require('./dev.config.js')

var port = 8080

var devServerConfig = {
  contentBase: path.join(__dirname, '../'),
  hot: true,
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
  proxy: {'*': 'http://localhost:3000'},
  headers: {'Access-Control-Allow-Origin': '*'}
}

var server = new WebpackDevServer(webpack(config), devServerConfig);

server.listen(port, function() {
  console.log(`!  🍕  ====  Webpack dev server running at port: `, port)
})
