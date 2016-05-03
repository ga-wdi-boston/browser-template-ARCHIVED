'use strict';
const appURL = require('../app-url');
const storyData = require('./htmlVar');
const functionality = require('../example');

const success = (data) => {
  console.log(data);
  console.log("User Created");
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  //storyData.isThereUser is not setting to true
  appURL.user = data.user;
  storyData.isThereUser = true;
  functionality.hideSignUp(data);
  functionality.hideAlert(storyData.isThereUser);
  console.log(appURL);
  console.log("Sign in successful");
};

const signOutSuccess = () => {
  appURL.user = null;
  storyData.isThereUser = false;
  functionality.hideSignUp();
  console.log(appURL);
  console.log("Sign out successful");
};

const changePasswordSuccess = () => {
  console.log("Change password successful!");
};

const createStorySuccess = (data) => {
  storyData.storyId = data.story.id;
  console.log(data);
  console.log("You created a story");
};

const showAllsuccess = () => {
  console.log("Showing All Stories");
};

// const deleteStorySuccess =() => {
//   console.log("Deleted this story successful");
// };

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  createStorySuccess,
  showAllsuccess,
//  deleteStorySuccess,
};
