'use strict';

const app = require('../app.js');
const store = require('../store.js');

let getQuotes = function(){
  return $.ajax({
    url: app.host + "/quotes",
    method: 'GET',
    // dataType: 'json'
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

let create = function(data) {
  return $.ajax({
    url: app.host + '/quotes',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

module.exports = {
  getQuotes,
  create
};
