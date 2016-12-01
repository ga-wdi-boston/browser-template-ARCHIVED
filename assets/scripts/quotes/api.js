'use strict';

const app = require('../app.js');

let getQuotes = function(){
  return $.ajax({
    url: app.host + "/quotes",
    method: 'GET',
    // dataType: 'json'
  });
};


module.exports = {
  getQuotes,
};
