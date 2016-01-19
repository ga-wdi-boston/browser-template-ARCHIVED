'use strict';

var webpack = require('webpack');

module.exports = {
  options: {
    entry: {
      app: './assets/scripts/index.js',
      vendor: ['jquery']
    },

    output: {
      path: './',
      filename: 'bundle.js'
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],

    stats: {
      colors: true,
      modules: true,
      reasons: true
    }
  },

  dev: {
    failOnError: false,
    watch: true,
    keepalive: true
  },

  prod: {
    failOnError: true,
    watch: false,
    keepalive: false
  }
};
