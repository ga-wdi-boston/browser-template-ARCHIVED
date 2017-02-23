'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});
// function addComment(){
//     let userComment = document.getElementById("userComment").value;
// 	document.getElementById("ui-state-default").innerHTML = userComment;
// }
// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');

$(() => {
  authEvents.addHandlers();
});
require('./example');
