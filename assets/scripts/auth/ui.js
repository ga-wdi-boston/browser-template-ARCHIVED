'use strict';
const appURL = require('../app-url');
const storyData = require('./htmlVar');
const functionality = require('../example');

const success = (data) => {
  console.log(data);
  functionality.closeSignUpModal();
  console.log("User Created");
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  appURL.user = data.user;
  storyData.isThereUser = true;
  functionality.hideSignUp(data);
  functionality.hideAlert(storyData.isThereUser);
  functionality.closeSignInModal();
  console.log(appURL);
  console.log("Sign in successful");
};

const signOutSuccess = () => {
  appURL.user = null;
  storyData.isThereUser = false;
  functionality.hideSignUp();
  functionality.closeSignInModal();
  functionality.depopulateTitles();
  console.log(appURL);
  console.log("Sign out successful");
};

const changePasswordSuccess = () => {
  console.log("Change password successful!");
  functionality.closeSignInModal();
};

const createStorySuccess = (data) => {
  storyData.storyId = data.story.id;
  functionality.closeWriteStoryModal();
  functionality.showAlert("You have published your story");
  console.log(data);
  console.log("You created a story");
};

const showAllsuccess = (data) => {
  storyData.allStories = data;
  functionality.populateTitles(data);
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
