var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '../'),
  entry: [
      './src/client/index.jsx',
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve('./dist'),
    publicPath: "http://localhost:8080/"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel', 'eslint-loader'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader') }
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
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css')
  ]
}