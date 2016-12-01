'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const onGetQuotes = (event) => {
  event.preventDefault();
  api.getBooks()
    .then(ui.getQuotesSuccess)
    .catch(ui.failure);

    .then(function(){
      $
    })
};

module.exports = {
  addHandlers,
};
