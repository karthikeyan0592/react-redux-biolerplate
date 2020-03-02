const webpack = require('webpack')
const path = require('path')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/App/App.js',
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: '/dist/client/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  target: 'web',
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        query: {
          compact: false,
        },
      },
    }, ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
    },
  },
  plugins: [
    new LoadablePlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/App/index.html',
    }),
  ],
}
