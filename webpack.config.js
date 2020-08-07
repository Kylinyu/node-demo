const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const devWebpackConfig = require('./webpack.dev')
const prodWebpackConfig = require('./webpack.prod')

module.exports = env => {
  switch(env) {
    case 'development':
      return merge(commonConfig, devWebpackConfig)
    case 'prod': 
      return merge(commonConfig, prodWebpackConfig)
      default:
        throw new Error('no config')
  }
}
