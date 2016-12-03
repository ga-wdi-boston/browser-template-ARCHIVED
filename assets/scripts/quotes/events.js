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
  api.create({quote:data.quote})
  .then(ui.createQuoteSuccess)
  .catch(ui.failure);
};

const updateQuote = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.update(data, $(this).attr('data-id'))
  .then(ui.createQuoteSuccess)
  .catch(ui.failure);
};

const deleteQuote = function () {
  event.preventDefault()
  .then(ui.success)
  .catch(ui.failure);
};

const addHandlers = () => {
  $('#getQuotesButton').on('click', onGetQuotes);
  $('#create-quote').on('submit', onGetQuotes, createQuote);
  $(document).on('submit','.update-quote-form', updateQuote);
  $(document).on('click','.delete-button', deleteQuote);
  // $('#clearBooksButton').on('click', onClearBooks);
};

module.exports = {
  addHandlers,
};
