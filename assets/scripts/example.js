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
  $(this).hide(5000).addClass("hidden");
};

const populateTitles = (data) => {
  for (let i = 0; i < data.stories.length; i++) {
    let storyTitle = data.stories[i].title;
    let div = $('<div/>', {
      "class": 'panel panel-body panel-default',
      "data-toggle": 'modal',
      "data-target": '#read-story-on-click-' + i,
      text: storyTitle
    });
    $('.story-holder').append(div);
  }

  // const populateStories = (data) => {
  //   for (let i = 0; i < data.stories.length; i++) {
  //     let storyTitle = data.stories[i].title;
  //     let storyBody = data.stories[i].body;
  //     let div = $('<div/>', {
  //       "class": 'panel panel-body panel-default',
  //       "data-toggle": 'modal',
  //       "data-target": '#read-story-on-click-' + i,
  //       text: storyTitle
  //     });
  //     $('.story-holder').append(div);
  //   }


};
// const populateStories = (id) => {
//   $('.modal-body-read').text(storyData.allStories.stories[id].title);
//   $('.modal-title-read').text(storyData.allStories.stories[id].body);
// };




// <div class="modal fade show-story-modal" id="read-story-on-click" tabindex="-1" role="dialog">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//         <h4 class="modal-title">Title</h4>
//       </div>
//       <div class="modal-body-read">
//         <p>One fine body&hellip;</p>
//       </div>
//       <div class="modal-footer">
//         <button id="delete-story-button" type="button" class="btn btn-primary">Delete Story</button>
//       </div>
//     </div><!-- /.modal-content -->
//   </div><!-- /.modal-dialog -->
// </div><!-- /.modal -->

// <div class="modal fade show-story-modal" id="read-story-on-click" tabindex="-1" role="dialog">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//         <h4 class="modal-title-read">Title</h4>
//       </div>
//       <div class="modal-body">
//         <p>One fine body&hellip;</p>
//       </div>
//       <div class="modal-footer">
//         <button id="delete-story-button" type="button" class="btn btn-primary">Delete Story</button>
//       </div>
//     </div><!-- /.modal-content -->
//   </div><!-- /.modal-dialog -->
// </div><!-- /.modal -->








module.exports = {
  hideSignUp,
  promptUserLogin,
  hideAlert,
  closeSignInModal,
  showAlert,
  closeWriteStoryModal,
  closeSignUpModal,
  populateTitles,
//  populateStories,
};
