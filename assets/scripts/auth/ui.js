'use strict';
const appData = require('../app-url');

const success = (data) => {
  console.log(data);
  console.log("Log in successful");
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  appData.user = data.user;
  console.log(appData);
};

const signOutSuccess = () => {
  appData.user = null;
  console.log(appData);
};

const changePasswordSuccess = () => {
  console.log("Change password successful!");
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,

};
