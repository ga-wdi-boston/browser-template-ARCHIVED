'use strict';
const storyData = require('./auth/htmlVar');

const hideSignUp = () => {
  if (storyData.isThereUser === true){
    $('#register-button').html("<a>Currently Signed In </a>").removeAttr("href");
    $('#sign-in-button').html("<a>Logout</a>");
  } else {
    $('#register-button').html("<a>Register</a>");
    $('#sign-in-button').html("<a>Sign-in</a>");
    $('.user-logged-options').hide("<li>");
  }
};

const alertUserToSignIn = () => {
  if (storyData.isThereUser !== true) {
    $('.alert-notification').removeClass("hidden");
  }
};

const promptUserLogin = (data) => {
  if (data === false) {
      $('.alert-notification').removeClass("hidden").html("<p>You need to sign in to write a story</p>");
  }
};





module.exports = {
  hideSignUp,
  alertUserToSignIn,
  promptUserLogin,
};
