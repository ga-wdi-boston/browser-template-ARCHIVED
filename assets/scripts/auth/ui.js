'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const game = require('./game');
const store = require('../store');

const onSignUp = function (event) {
    event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.signUpSuccess)
    // .then(ui.success)

    // .catch(ui.failure)
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
    .then(ui.signInSuccess);

    // .then(ui.success)
  // .catch(ui.failure);

};
const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    // .then(ui.success)
    // .catch(ui.failure)
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
    // .catch(ui.failure)
    ;
};


const onGetGame = function (event) {
  event.preventDefault();

  api.game()

    .then(ui.getGameSuccess)
    // .catch(ui.failure)
    ;
};
//
// $('#sign-in').show();


// const onPatchGame = function (event) {
//   event.preventDefault();
//   api.patchGame(store.game.id, event.target.id, game.currentPlayer, game.checkWins())
//   .then(ui.success)
//   .catch(ui.failure);
// };

// const onCreateGame = function (event) {
//   event.preventDefault();

// const gameUpdate = function (event) {
//   event.preventDefault();
//   api.createGame()
//
//     .then(ui.success)
//     .catch(ui.failure)
//     ;


const addHandlers = () => {
  $('#sign-up').show();
  $('#sign-in').show();
  $('#wrapper').hide();
  // $('#wrapper').show();

  $('#getGame').hide();
  // $('#getGame').show();
  $('.changebtn').hide();
  // $('#game-log').hide();
  $('#sign-out').hide();
  // $('#reset').hide();
  // $('#hidePass').hide();
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
  $('#getGame').on('click', onGetGame);
  $('#reset').on('click', game.onCreateGame);

};
module.exports = {
  addHandlers,

};
