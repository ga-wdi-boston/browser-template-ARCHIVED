'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const onGetQuotes = (event) => {
  event.preventDefault();
  api.getQuotes()
    .then(ui.getQuotesSuccess)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('#getQuotesButton').on('click', onGetQuotes);
  // $('#clearBooksButton').on('click', onClearBooks);
};

module.exports = {
  addHandlers,
};
