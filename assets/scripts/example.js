'use strict';
const storyData = require('./auth/htmlVar');

const hideSignUp = () => {
  if (storyData.isThereUser === true){
    $('#register-button').html("<a>Currently Signed In </a>");
    $('#sign-in-button').html("<a>Logout</a>");
  } else {
    $('#register-button').html("<a>Register</a>");
    $('#sign-in-button').html("<a>Sign-in</a>");
    $('.user-logged-options').hide("<li>");
  }
};







module.exports = {
  hideSignUp,
};
