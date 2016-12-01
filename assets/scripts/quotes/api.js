'use strict';

const app = require('../app.js');

let getQuotes = function(){
  return $.ajax({
    url: app.host + "/quotes", // "http://book-json.herokuapp.com/books"
    method: 'GET',
    // dataType: 'json'
  });
};


module.exports = {
  getQuotes,
  getTitles
};
