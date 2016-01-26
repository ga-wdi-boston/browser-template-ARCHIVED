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
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],

    stats: {
      colors: true,
      modules: true,
      reasons: true
    }
  },

  build: {
    failOnError: true,
    watch: false,
    keepalive: false
  }
};
