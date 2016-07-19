'use strict';

let webpack = require('webpack');
let path = require('path');

module.exports = {
  options: {
    entry: {
      bundle: './index.js',
      specs: './spec/_all.js',
      vendor: ['jquery', 'bootstrap-sass'],
    },

    output: {
      path: './',
      filename: '[name].js',
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015'],
          },
        },
        {
          test: /\.css/,
          loader: 'style!css',
          includePaths: [path.resolve(__dirname, './node_modules')],
        },
        {
          test: /\.scss/,
          loader: 'style!css!sass',
          includePaths: [path.resolve(__dirname, './node_modules')],
        },
        {
          test: /\.woff[\d]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
        },
        {
          test: /\.(hbs|handlebars)$/,
          loader: 'handlebars-loader',
        },
        {
          test: /\.html\.(hbs|handlebars)$/,
          loader: 'handlebars-loader!html',
        },
      ],
    },

    stats: {
      colors: true,
      modules: true,
      reasons: true,
    },
  },

  build: {
    failOnError: true,
    watch: false,
    keepalive: false,
  },
};
