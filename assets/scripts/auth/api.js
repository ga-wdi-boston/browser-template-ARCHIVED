'use strict';

const app = require('../app');
const store = require('../store');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data
  });
};
const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: data
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  });
};

module.exports = {signUp, signIn, changePassword};
