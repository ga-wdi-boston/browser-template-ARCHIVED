'use strict';

const app = require('../app.js');
const store = require('../store.js');

const getQuotes = function(){
  return $.ajax({
    url: app.host + "/quotes",
    method: 'GET',
    // dataType: 'json'
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const create = function(data) {
  return $.ajax({
    url: app.host + '/quotes',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const update = function(data, id) {
  // console.log('dogge is ', dogge);
  // ^ print to the console 'something new!'
  return $.ajax({
    url: app.host + '/quotes/' + id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const destroy = function(id) {
  return $.ajax({
    url: app.host + '/quotes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  });
};

module.exports = {
  getQuotes,
  create,
  update,
  destroy
};
