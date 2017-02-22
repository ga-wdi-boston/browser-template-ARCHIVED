'use strict'

// load manifests

$(() => {
  // load styling
  require('./app/styles/index.scss')

  // load configurations for the SPA
  const config = require('./app/config')
  const application = config.application || {}

  // set the SPA title
  const title = application.title || ''
  $('title').text(title)

  // load the SPA body
  const body = require('./app/templates/index.hbs')
  $('body').append(body)

  // set `config.apiOrigin` for use in AJAX requests
  const setAPIOrigin = require('./lib/set-api-origin')
  setAPIOrigin(location, config)

  // load SPA logic
  require('./app/scripts/index.js')
})
