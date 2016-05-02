'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
// Authentication ations
  $('#signup_form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.signUp(authUi.success, authUi.failure, data);
  });

  $('#signin_form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('sign-in' + data);
    authApi.signIn(authUi.sign_in_success, authUi.failure, data);
  });

  $('#signout_form').on('click', function(event) {
    event.preventDefault();
    console.log('sign-out');
    authApi.signOut(authUi.success, authUi.failure);
  });

// Quiver and Journal actions

  $('#add_board').on('submit', function(event){
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.addBoard(authUi.success, authUi.failure, data);
  });

  $('#showQuiver').on('click', function(event) {
    event.preventDefault();
  });
};

$('#add_session').on('submit', function(event) {
  event.preventDefault();
  let data=getFormFields(this);
  console.log(data);
  authApi.addSession(authUi.success, authUi.failure, data);
});



module.exports = {
  addHandlers,
};
