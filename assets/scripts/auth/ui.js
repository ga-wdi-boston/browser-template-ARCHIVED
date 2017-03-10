'use strict';

const success = () => {
  $('#status-box').text('Action Successful');
};

const signUpSuccess = () => {
  let account = $('#account-name').val();
  $('#status-box').text('Account Created: ' + account);
  $('#signUpModal').modal('hide');
  $('.signup-field').val('');
};

const signUpFail = () => {
  $('#sign-up-message').text('Either the email is not valid or the passwords do not match.');
};

const signInFail = () => {
  $('#sign-in-message').text('The information is incorrect.');
};

const changePassSuccess = () => {
  $('#status-box').text('Password Changed Successfully');
  $('#changePassModal').modal('hide');
  $('.change-pass-field').val('');
};

const changePassFail = () => {
  $('#change-pass-message').text('Please fill out the fields.');
};

const failure = () => {
  $('#status-box').text('Theres seems to have been an error');
};

// On sign in, un-hide game board elements
const signInSuccess = () => {
  let account = $('#account-name-signin').val();
  $('#status-box').text(account + ' has successfully signed in');

  $('#signUpButton').addClass('hidden');
  $('#signInButton').addClass('hidden');
  $('#changePassButton').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#signInModal').modal('hide');
  $('.signin-field').val('');
  $('#create-entry').removeClass('hidden');
  $('#get-index-button').removeClass('hidden');
  $('#show-update-form').removeClass('hidden');
  $('#carousel-animals').removeClass('hidden');
};

// On sign out, hide game board elements
const signOutSuccess = () => {
  $('#status-box').text('Sign Out Successful.  Please Sign Up or Sign In.');

  $('#signUpButton').removeClass('hidden');
  $('#signInButton').removeClass('hidden');
  $('#changePassButton').addClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#create-entry').addClass('hidden');
  $('#update-entry').addClass('hidden');
  $('#get-index-button').addClass('hidden');
  $('#show-update-form').addClass('hidden');
  $('#entry-container').html('');
  $('#carousel-animals').addClass('hidden');
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFail,
  signInFail,
  changePassFail,
  signInSuccess,
  changePassSuccess,
  signOutSuccess,
};
