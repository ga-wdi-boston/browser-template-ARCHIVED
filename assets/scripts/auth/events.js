'use strict';

const authApi = require('./api');
const getFormFields = require('../../../lib/get-form-fields');
const appURL = require('../app-url');
const authUi = require('./ui');

const addHandlers = () => {

  $('#home-button').on('click', function(event){
      event.preventDefault();
      authApi.showAll();
  });

  $('#sign-up').on('submit', function (event) {
      let data = getFormFields(this);
      event.preventDefault();
      authApi.signUp(authUi.success, authUi.failure, data);
  });

  $('#sign-in').on('submit', function (event) {
      let data = getFormFields(this);
      appURL.currentPass = data.credentials.password;
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

  $('.write-story-main-button').on('click', function(event){
      event.preventDefault();
      authApi.createStory(authUi.createStorySuccess, authUi.failure);
  });

};



module.exports = {
  addHandlers,
};
