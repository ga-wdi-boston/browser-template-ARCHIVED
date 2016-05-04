'use strict';

const authApi = require('./api');
const getFormFields = require('../../../lib/get-form-fields');
//const appURL = require('../app-url');
const authUi = require('./ui');
const functionality = require('../example');
const userStatus = require('./htmlVar');

const addHandlers = () => {

  // $('#home-button').on('click', function(event){
  //     event.preventDefault();
  //     authApi.showIndex(authUi.showAllsuccess, authUi.failure);
  // });

  $('#show-my-stories-all').on('click', function(event){
      event.preventDefault();
      authApi.showAll(authUi.showAllsuccess, authUi.failure);
      functionality.hideAlert();
  });

  $('#sign-up').on('submit', function (event) {
      let data = getFormFields(this);
      event.preventDefault();
      authApi.signUp(authUi.success, authUi.failure, data);
  });

  $('#sign-in').on('submit', function (event) {
      let data = getFormFields(this);
      event.preventDefault();
      authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });

  $('#sign-out').on('submit', function (event) {
      event.preventDefault();
      authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });

  $('#change-password').on('submit', function (event) {
      event.preventDefault();
      let data = getFormFields(this);
      authApi.changePassword(authUi.changePasswordSuccess, authUi.failure, data);
  });

  $('#submit-story-form').on('submit', function(event){
      event.preventDefault();
      let data = getFormFields(this);
      authApi.createStory(authUi.createStorySuccess, authUi.failure, data);
  });

  $('#submit-story-edit').on('submit', function(event){
      event.preventDefault();
      let data = getFormFields(this);
      // let id = userStatus.storyId;
      authApi.updateStory(authUi.updateStorySuccess, authUi.failure, data);
      functionality.depopulateTitles();

  });

  $('#delete-story-button').on('click', function(event){
    event.preventDefault();
    authApi.deleteStory(authUi.deleteStorySuccess, authUi.failure);
    // functionality.populateTitles(userStatus.allStories);
    functionality.depopulateTitles();
  });


};



module.exports = {
  addHandlers,
};
