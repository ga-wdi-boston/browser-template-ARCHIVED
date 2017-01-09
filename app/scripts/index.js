'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const main = require('../templates/index.hbs')

$(() => {
  $('title').text('For example')
  $('body').append(main)
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
