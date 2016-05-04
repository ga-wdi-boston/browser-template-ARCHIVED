'use strict';

const appURL = require('../app-url');
const storyData = require('./htmlVar.js');

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: appURL.link + '/sign-in',
    data,
  }).done(success)
    .fail(failure);
};

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: appURL.link + '/sign-up',
    data,
  }).done(success)
    .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: appURL.link + '/sign-out/' + appURL.user.id,
    headers: {
      Authorization: 'Token token=' + appURL.user.token,
    },
  }).done(success)
    .fail(failure);
};

const changePassword = (success, failure, data) => {
  console.log(appURL.user.token);
  $.ajax({
    method: 'PATCH',
    url: appURL.link + '/change-password/' + appURL.user.id,
    data: {
        "passwords": {
          "old": data.credentials.old_password,
          "new": data.credentials.password
      }
    },
    headers: {
      Authorization: 'Token token=' + appURL.user.token,
    },
  }).done(success)
    .fail(failure);
};

const createStory = (success, failure, data) => {
  console.log(appURL.data);
  $.ajax({
    method: 'POST',
    url: appURL.link + '/stories/',
    data: {
        "story": {
          "title": data.story.title,
          "body": data.story.body
      }
    },
    headers: {
      Authorization: 'Token token=' + appURL.user.token,
    },
  }).done(success)
    .fail(failure);
};

// const showIndex = (success, failure) => {
//   $.ajax({
//     method: 'GET',
//     url: appURL.link + '/stories/index',
//     headers: {
//       Authorization: 'Token token=' + appURL.user.token,
//     },
//   }).done(success)
//     .fail(failure);
// };

const showAll = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: appURL.link + '/stories/',
    headers: {
      Authorization: 'Token token=' + appURL.user.token,
    },
  }).done(success)
    .fail(failure);
};

const updateStory = (success, failure, data) => {
  console.log();
  $.ajax({
    method: 'PATCH',
    url: appURL.link + '/stories/' + storyData.storyId,
    data: {
      "story": {
        "title": data.story.title,
        "body": data.story.body
      }
    },
    headers: {
      Authorization: 'Token token=' + appURL.user.token
    }
  }).done(success)
    .fail(failure);
};


const deleteStory = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: appURL.link + '/stories/' + storyData.storyId,
    headers: {
      Authorization: 'Token token=' + appURL.user.token,
    },
  }).done(success)
    .fail(failure);
};

module.exports = {
  showAll,
  signUp,
  signIn,
  signOut,
  changePassword,
  createStory,
  deleteStory,
  updateStory,
// showIndex,
};
