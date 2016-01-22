var webpack = require('webpack')
var path = require('path')

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
    publicPath: "/assets/"
  },
  module: {
    preLoaders: [
      { test: /\.(js|jsx)$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']}
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
    new webpack.HotModuleReplacementPlugin()
  ]
}