'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// const intro = require('./intro.js');
const authEvents = require('./auth/events');
const api = require('./auth/api');
$(() => {
  authEvents.addHandlers();
  api.NoaaData();

  // intro.drawChart();
});
