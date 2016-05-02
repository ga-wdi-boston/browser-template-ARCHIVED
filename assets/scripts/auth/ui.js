'use strict';
const appURL = require('../app-url');
const storyData = require('./htmlVar');

const success = (data) => {
  console.log(data);
  console.log("User Created");
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  appURL.user = data.user;
  console.log(appURL);
  console.log("Sign in successful");
};

const signOutSuccess = () => {
  appURL.user = null;
  console.log(appURL);
  console.log("Sign out successful");
};

const changePasswordSuccess = () => {
  console.log("Change password successful!");
};

const createStorySuccess = (data) => {
  storyData.storyId = data.stories;
  console.log(storyData.storyId);
  console.log("You created a story");
};

const showAllsuccess = () => {
  console.log("Showing All Stories");
};

const deleteStorySuccess =() => {
  console.log("Deleted this story successful");
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  createStorySuccess,
  showAllsuccess,
  deleteStorySuccess,
};
