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

module.exports = {
  signUp,
  signIn
};
