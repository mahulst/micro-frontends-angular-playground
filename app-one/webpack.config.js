const webpack = require("webpack");
const path = require("path");

module.exports = {
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./manifest.json"),
      // scope: "xyz",
    })
  ]
};
