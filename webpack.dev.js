const { merge } = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(commonConfig, {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        }
      },
  //     {
  //         test: /\.md$/,
  //         use: [
  //           {
  //             // 自定义插件
  //             loader: path.resolve(__dirname, './markdown-loader.js'),
  //             options: {
  //               name: 'xixi'
  //             },
  //           }
  //         ]
  //     },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'xiaoman',
      template: './index.html'
    })
  ]
})