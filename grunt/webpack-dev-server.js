'use strict';

let clone = require('clone');

// clone the webpack config to separate configuration of webpack and dev server
let webpackConfig = clone(require('./webpack').options);

//port for webpack-dev-server
const port = +('GA'.split('').reduce((p, c)=> p + c.charCodeAt(), ''));

// enable live reload without a script tag
webpackConfig.entry.vendor.unshift(`webpack-dev-server/client?http://localhost:${port}`);

module.exports = {
  options: {
    port,
    webpack: webpackConfig,
  },

  start: {
    keepAlive: true,
    webpack: {
      devtool: 'source-map',
      debug: 'true',
    },
  },
};
