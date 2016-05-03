'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');

let surfboardId;

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

  $('#signout_form').on('click', function (event) {
    event.preventDefault();
    console.log('sign-out');
    authApi.signOut(authUi.success, authUi.failure);
  });

  // Quiver and Journal actions

  $('#add_board').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    surfboardId = $(this).name;
    console.log(data);
    authApi.addBoard(authUi.success, authUi.failure, data, surfboardId);
  });

  $('#showQuiver').on('click', function (event) {
    event.preventDefault();
    $('.show-quiver').html('');
    authApi.showQuiver();
  });
};

$('#add_session').on('submit', function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log(data);
  authApi.addSession(authUi.success, authUi.failure, data);
});

$('#showSessions').on('click', function (event) {
  event.preventDefault();
  $('.show-sessions').html('');
  $('.show-quiver').html('');
  authApi.showQuiver();
  authApi.showSessions();
});

// $('.delete_session').on('click', function(event) {
//   debugger;
//   event.preventDefault();
//   let id = this.name;
//   console.log(id);
//   debugger;
// });

// add board to sessions
$('#add_board_to_session').on('submit', function (event) {
  event.preventDefault();
  console.log('clicked!!!!');
  let data = getFormFields(this);
  console.log(data);
  let sessionId = parseInt(data.session.id);
  console.log(sessionId);
  authApi.addBoardToSession(authUi.success, authUi.failure, data);
});

module.exports = {
  addHandlers,
  surfboardId,
};
