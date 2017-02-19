const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['./src/client/index.jsx'],
    backend: ['./src/client/index.jsx']
  },
  output: {
    publicPath: '/assets/',
    filename: '[name]/bundle.js',
    path: path.resolve('../dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  devtool: 'source-map',
  target: 'web',
  stats: 'errors-only',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
