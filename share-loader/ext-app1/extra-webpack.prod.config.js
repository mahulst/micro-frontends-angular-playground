const path = require('path');
const {Externals} = require('share-loader');
var LastCallWebpackPlugin = require('last-call-webpack-plugin');
module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    chunkFilename: '[name].js',
    library: 'ext',
    libraryTarget: 'umd'
  },
  externals: [
    Externals({
      namespace: 'container-app',
      modules: [/@angular/],
      exclude: [/router.ngfactory/]
    })
  ],
  optimization: {
    runtimeChunk: false,
  },
  plugins: []
}
