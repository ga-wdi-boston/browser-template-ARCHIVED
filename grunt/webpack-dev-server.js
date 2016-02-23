'use strict';

var webpackConfig = require('./webpack').options;

// enable live reload without a script tag
webpackConfig.entry.vendor.unshift('webpack-dev-server/client?http://localhost:8080');

module.exports = {
  options: {
    webpack: webpackConfig
  },

  start: {
    keepAlive: true,
    webpack: {
      devtool: 'source-map',
      debug: 'true'
    }
  }
};
