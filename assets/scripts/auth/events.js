'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');



const onSignInUser = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  // $('.player-id').text("Hello!: " + data);
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure);
};

const onSignUpUser = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signUp(data)
  .then(ui.success)
  .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.failure);
};

const onSignOutUser = function () {
  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.failure);
};

const addHandlers = () => {
  //log in info
  $('#sign-up').on('submit', onSignUpUser);
  $('#sign-in').on('submit', onSignInUser);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOutUser);
};


module.exports = {
  addHandlers,
};
