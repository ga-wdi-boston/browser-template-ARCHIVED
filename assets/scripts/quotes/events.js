'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const getFormFields = require('../../../lib/get-form-fields');

const onGetQuotes = (event) => {
  event.preventDefault();
  api.getQuotes()
    .then(ui.getQuotesSuccess)
    .catch(ui.failure);
};

const indexQuotes = function(e) {
  e.preventDefault();
  api.index()
  .then(ui.indexQuotesSuccess)
    .catch(ui.failure);
  $('.create-quote-form').on('submit', onGetQuotes);
};

const createQuote = function(event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.create(data)
  .then(ui.createQuoteSuccess)
  .catch(ui.failure);
};

const deleteQuote = function(event){
// In here ---- access the data-id using $()
window.alert($(this).attr('data-id'))
}

const addHandlers = () => {
  $('#getQuotesButton').on('click', onGetQuotes);
  $('#create-quote').on('submit', onGetQuotes, createQuote);
  $(document).on('click','.delete-button', deleteQuote)
  // $('#clearBooksButton').on('click', onClearBooks);
};

module.exports = {
  addHandlers,
};
