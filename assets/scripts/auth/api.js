'use strict';


const appURL = require('../app-url');

const showAll = (success, failure, data) => {
  $.ajax({
    method: 'GET',
    url: appURL.link + '/stories/',
    data,
  }).done(success)
    .fail(failure);
};

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

module.exports = {
  showAll,
  signUp,
  signIn,
  signOut,
};
