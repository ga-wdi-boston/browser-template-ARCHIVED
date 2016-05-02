'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + "sign-up",
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + "sign-in",
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  console.log(app);
  $.ajax({
    method: 'DELETE',
    url: app.api + 'sign-out/' + app.user1.id,
    headers: {
      Authorization: "Token token=" + app.user1.token,
    },
  }).done(success)
  .fail(failure);
};

// Quiver and Journal actions
const addBoard = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'surfboards',
    headers: {
      Authorization: 'Token token=' + app.user1.token,
    },
    data,
  }).done(success)
  .fail(failure);
};

const showQuiver = () => {
  $.ajax({
    method: 'GET',
    url: app.api + 'surfboards',
    headers: {
      Authorization: 'Token token=' + app.user1.token,
    },
  }).done(function(data){
    displayQuiver(data);
  });
};

// const showQuiver = () => {
//   $.ajax({
//     method: 'GET',
//     url: app.api + 'surfboards/user_id/' + app.user1.id,
//     headers: {
//       Authorization: 'Token token=' + app.user1.token,
//     },
//   }).done(function(data){
//     displayQuiver(data);
//   });
// };

const displayQuiver = (data) => {
  let quiverTemplate = require('../templates/quiver.handlebars');
  $('.show-quiver').append(quiverTemplate({surfboards:data}));
};



const addSession = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'sessions',
    headers: {
      Authorization: 'Token token=' + app.user1.token,
    },
    data,
  }).done(success)
  .fail(failure);
};


const showSessions = () => {
  $.ajax({
    method: 'GET',
    url: app.api + 'sessions',
    headers: {
      Authorization: 'Token token=' + app.user1.token,
    }
  }).done(function(data){
    displayJournal(data);
  });
};

const displayJournal = (data) => {
  let sessionsTemplate = require('../templates/sessions.handlebars');
  $('.show-sessions').append(sessionsTemplate({sessions:data}));
};

module.exports = {
  signUp,
  signIn,
  signOut,
  addBoard,
  showQuiver,
  addSession,
  showSessions
};
