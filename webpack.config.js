const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(svg|png|jpg|avaif|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
