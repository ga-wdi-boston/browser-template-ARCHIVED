'use strict';

var webpack = require('webpack');

module.exports = {
  options: {
    entry: {
      bundle: './assets/scripts/index.js',
      specs: './spec/_all.js',
      vendor: ['jquery'],
    },

    output: {
      path: './',
      filename: '[name].js'
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
