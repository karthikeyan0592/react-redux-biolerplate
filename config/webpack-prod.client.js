const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/App/App.js',
    output: {
        path: path.resolve(__dirname,'../dist'),
        publicPath: '/',
        filename:'main.js'
    },
    target:'web',
    mode:'production',
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
        }]
    },
    devServer:{
        contentBase:'./dist',
        port:4000,
        writeToDisk: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
      template: './src/App/index.html'
        }),
      ],
}