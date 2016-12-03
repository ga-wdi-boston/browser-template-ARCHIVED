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


let update = function(data, id) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/quotes/' + id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

let destroy = () => {
  return $.ajax({
    url: app.host + '/quotes/' + store.user.id,
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
