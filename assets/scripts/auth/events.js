'use strict';

// TODO get cool switch thing to work

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
    ;
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
    ;
};

const onChangePass = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePass(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
    ;
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
    ;
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePass);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
