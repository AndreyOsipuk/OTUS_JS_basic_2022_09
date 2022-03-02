const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: resolve(__dirname, "./src/index"),
  devtool: process.env.NODE_ENV === "production" ? 'hidden-source-map' : 'eval-source-map',
  devServer: {
    compress: true,
    port: 8000,
    client: {
      logging: 'info',
    },
  },
  output: {
    filename: '[name].bundle.[chunkhash].js',
    clean: true,
    path: resolve(__dirname, "./dist"),
    environment: {
      arrowFunction: false,
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext]',
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html')
    }),
    new MiniCssExtractPlugin(),
    new MiniCssExtractPlugin()
  ],
}