'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  options: {
    entry: {
      application: './index.js',
      specs: './spec/_all.js',
      vendor: ['jquery', 'bootstrap-sass']
    },

    output: {
      filename: '[name].js',
      path: path.join(__dirname, '/../public'),
      publicPath: 'public/'
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
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
        {
          test: /\.css/,
          loader: 'style!css',
          includePaths: [path.resolve(__dirname, './node_modules')]
        },
        {
          test: /\.scss/,
          loader: 'style!css!sass',
          includePaths: [path.resolve(__dirname, './node_modules')]
        },
        {
          test: /\.woff[\d]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(hbs|handlebars)$/,
          loader: 'handlebars-loader',
          query: {
            helperDirs: [
              path.join(__dirname, '/../assets/scripts/templates/helpers')
            ]
          }
        }
      ]
    },

    resolve: {
      alias: {
        handlebars: 'handlebars/dist/handlebars.js'
      }
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
}
