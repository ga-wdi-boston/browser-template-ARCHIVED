'use strict';

var webpack = require('webpack');

module.exports = {
  options: {
    entry: {
      bundle: './index.js',
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
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        },
        { test: /\.scss$/, loader: 'style!css!sass' }
      ]
    },

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
