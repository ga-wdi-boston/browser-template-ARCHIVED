'use strict';

const app = require('../app-data');
let surfboardId = require('./events');
// const authUi = require('./ui');

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
    console.log(data);
  });
};

const displayQuiver = (data) => {
  let quiverTemplate = require('../templates/quiver.handlebars');
  let quiverTemplateSelect = require('../templates/quiver-select.handlebars');
  // let quiverTemplateSelect = require('../templates/quiver-select.handlebars');
  $('.show-quiver').append(quiverTemplate({surfboards:data}));
  $('.show-quiver-select').append(quiverTemplateSelect({surfboards:data}));
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
    showQuiver();
  });
};

const displayJournal = (data) => {
  let sessionsTemplate = require('../templates/sessions.handlebars');
  $('.show-sessions').append(sessionsTemplate({sessions:data}));
};

const addBoardToSession = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + 'sessions/' + data.session.id,
    headers:{
      Authorization: 'Token token=' + app.user1.token,
    },
    data,
  }).done(success)
  .fail(failure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  addBoard,
  showQuiver,
  addSession,
  showSessions,
  addBoardToSession
};
