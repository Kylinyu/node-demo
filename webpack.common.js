const HtmlWepackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
  },
  plugins: [
    new HtmlWepackPlugin({
      title: 'haha'
    }),
    new CleanWebpackPlugin(),
    // new ManifestPlugin(),
  ],
  resolve: {
    alias: {
      haha: path.resolve(__dirname, './src/haha'),
    }
  }
}