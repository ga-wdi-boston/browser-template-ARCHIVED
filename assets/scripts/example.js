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
const hideAlert = (data) => {
  if (data === true) {
    $('.alert-notification').addClass("hidden");
  }
};

const promptUserLogin = (data) => {
  if (data === false) {
    $('.write-story-main-button').attr("data-target", "");
    $('.alert-notification').removeClass("hidden").html("<p>You need to sign in to write a story</p>");
  } else {
    $('.write-story-main-button').attr("data-target", "#write-a-story-modal");
    $('.alert-notification').addClass("hidden");
  }
};

const closeModals = (element) => {
  $(element).attr("data-dismiss", "modal");
};

module.exports = {
  hideSignUp,
  promptUserLogin,
  hideAlert,
  closeModals,
};
