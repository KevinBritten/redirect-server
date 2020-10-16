var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "file-loader"
      }
      
    ]
  },
  
  
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    inline: true,
    port: 3000,
    host: "0.0.0.0"
  },
  
  devtool: "#eval-source-map"
};
