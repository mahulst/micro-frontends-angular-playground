const path = require('path');
const {Externals} = require('share-loader');
module.exports = {
  externals: [
    Externals({
      namespace: 'container-app',
      modules: [/@angular/]
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    chunkFilename: '[name].js',
  },
  optimization: {
    runtimeChunk: false,
  }
}
