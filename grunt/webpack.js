'use strict';

var webpack = require('webpack');

module.exports = {
  dev: {
    entry: {
      app: './assets/scripts/main.js',
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
    },

    failOnError: false,
    watch: true,
    keepalive: true
  },

  prod: {
    entry: {
      app: './assets/scripts/main.js',
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
    },

    failOnError: true,
    watch: false,
    keepalive: false
  }
};
