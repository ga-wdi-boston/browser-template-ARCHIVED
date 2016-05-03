'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const functionality = require('./example');
const authEvents = require('./auth/events.js');
const userStatus = require('./auth/htmlVar');
// On document ready
$(() => {
  userStatus.isThereUser = false;
  authEvents.addHandlers();

  $('.write-story-main-button').on('click', function(){
    $(this).addClass("no-modal");
    functionality.promptUserLogin(userStatus.isThereUser);
  });
  //functionality.hideSignUp();

});
