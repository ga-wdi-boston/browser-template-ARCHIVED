'use strict'

// load manifests

const setAPIOrigin = require('./lib/set-api-origin');
const config = require('./app/config');
const main = require('./app/templates/index.hbs');

$(() => {
  $('title').text('For example');
  $('body').append(main);
  setAPIOrigin(location, config);
});

// scripts
require('./app/scripts/index.js')

// styles
require('./app/styles/index.scss')
