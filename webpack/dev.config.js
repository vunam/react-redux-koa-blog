const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel', 'eslint-loader'] },
      { test: /\.css$/, loader: 'css!' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('raw') }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: path.resolve('.eslintrc')
  },
  plugins: [
    new ExtractTextPlugin('[name]/styles.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
