'use strict';

var webpackConfig = require('./webpack').options;

module.exports = {
  options: {
    webpack: webpackConfig
  },

  start: {
    keepAlive: true,
    webpack: {
      devtool: 'eval',
      debug: 'true'
    }
  }
};
