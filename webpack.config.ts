const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const resolve = (dir: string) => path.join(__dirname, dir);

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [{
      test: /\.(png|jpg|svg|gif)$/,
      use: [{
        loader: 'file-loader',
      }],
    }, {
      test: /\.css/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
                ["@babel/env", {
                    "targets": {
                        'browsers': ['Chrome >=59']
                    },
                    "modules":false,
                    "loose":true
              }],"@babel/react"
            ],
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new webpack.NamedModulesPlugin(),
  ],
}
