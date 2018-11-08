const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./client/src/"),
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ["react", "env"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        exclude: /node_modules/,
        options: {
          modules: true,
          localIdentName: "[name]__[local]__[hash:base64:5]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};