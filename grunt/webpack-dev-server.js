'use strict'

const clone = require('clone')

// clone the webpack config to separate configuration of webpack and dev server
const webpackConfig = clone(require('./webpack').options)

// port for development server
const port = +('GA'.split('').reduce((p, c) => p + c.charCodeAt(), ''))

// make `jQuery` and `$` available in the development console
webpackConfig.module.loaders.push({
  test: require.resolve('jquery'),
  loader: 'expose?jQuery!expose?$'
})

module.exports = {
  options: {
    port,
    inline: true, // reload on change
    webpack: webpackConfig,
    publicPath: '/public/'
  },

  start: {
    keepAlive: true,
    webpack: {
      devtool: 'source-map',
      debug: 'true'
    }
  }
}
