'use strict';
const store = require('../store.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  console.log(data);
  store.user = data.user;
  $(".user").text(data.user.email);
};

const signInFailure = (error) => {
  console.error(error);
};

const signOutSuccess = () => {
  store.user = null;
  console.log(store);
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signInFailure,
  signOutSuccess
};
