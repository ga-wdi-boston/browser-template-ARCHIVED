'use strict';
const storyData = require('./auth/htmlVar');

const hideSignUp = () => {
  if (storyData.isThereUser === true){
    $('#register-button').html("<a>Currently Signed In </a>").removeAttr("href");
    $('#sign-in-button').html("<a>Logout</a>");
  } else {
    $('#register-button').html("<a>Register</a>");
    $('#sign-in-button').html("<a>Sign-in</a>");
  }
};
// const hideAlert = (data) => {
//   if (data === true) {
//     $('.alert-notification').addClass("hidden");
//   }
// };
const hideAlert = () => {
    $('.alert-notification').addClass("hidden");

};

const promptUserLogin = (data) => {
  if (data === false) {
    $('.write-story-main-button').attr("data-target", "");
    $('.alert-notification').removeClass("hidden").html("<p>Sign in to write a story</p>");
  } else {
    $('.write-story-main-button').attr("data-target", "#write-a-story-modal");
    $('.alert-notification').addClass("hidden");
  }
};

const closeSignInModal = () => {
  $('#my-sign-in-modal').modal('toggle');
};
const closeSignUpModal = () => {
  $('#my-sign-up-modal').modal('toggle');
};
const closeWriteStoryModal = () => {
  $('#write-a-story-modal').modal('toggle');
};
const showAlert = (text) => {
  $('.alert-notification').removeClass("hidden").html(text);
};
const closeOptionModal = () => {
  $('#options-modal-on-click').modal('toggle');
};

const populateTitles = (data) => {
  for (let i = 0; i < data.stories.length; i++) {
    let storyTitle = data.stories[i].title;
    let storyBody = data.stories[i].body;
    let storyId = data.stories[i].id;
    let div1 = $('<div/>', {
      id: storyId,
      title: storyTitle,
      "class": 'panel panel-title panel-default',
      "data-toggle": 'modal',
      "data-target": '#options-modal-on-click',
      text: storyTitle
    });
    let div2 = $('<div/>', {
      "class": 'panel panel-body panel-default',
      text: storyBody
    });
    $('.story-holder').append(div1, div2);
  }
  $('.panel-title').on('click', function(event){
    event.preventDefault();
    storyData.storyId = this.id;
  });
};

const depopulateTitles = () => {
  $('.panel-title').remove();
  $('.panel-body').remove();

};



module.exports = {
  hideSignUp,
  promptUserLogin,
  hideAlert,
  closeSignInModal,
  showAlert,
  closeWriteStoryModal,
  closeSignUpModal,
  populateTitles,
  depopulateTitles,
  closeOptionModal,
};
