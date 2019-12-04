const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const LoadablePlugin = require('@loadable/webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/App/ServerApp.js',
  output: {
    path: path.resolve(__dirname, '../dist/node'),
    publicPath: '/dist/node/',
    filename: 'main.js',
    chunkFilename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: ['commonjs @loadable/component', nodeExternals()],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            compact: false,
          },
        },
      },
    ],
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
