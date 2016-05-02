'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + "sign-up",
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + "sign-in",
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  console.log(app);
  $.ajax({
    method: 'DELETE',
    url: app.api + 'sign-out/' + app.user1.id,
    headers: {
      Authorization: "Token token=" + app.user1.token,
    },
  }).done(success)
  .fail(failure);
};

// Quiver and Journal actions
const addBoard = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'surfboards',
    headers: {
      Authorization: 'Token token=' + app.user1.token,
    },
    data,
  }).done(success)
  .fail(failure);
};

const showQuiver = (success, failure, data) => {

};

module.exports = {
  signUp,
  signIn,
  signOut,
  addBoard,
  showQuiver
};
