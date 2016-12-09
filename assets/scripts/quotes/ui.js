'use strict';
const store = require('../store');
const showQuotesTemplate = require('../templates/quote-listing.handlebars');
const api = require('./api');


const getQuotesSuccess = (quotes) => {
  $('#content').html(showQuotesTemplate(quotes, "cool"));
    console.log('quotes is',quotes);

};

const createQuoteSuccess = (quotes) => {
  $('#content').html(showQuotesTemplate(quotes.id, "cool"));
    console.log('quotes is', quotes);

};

const updateQuoteSuccess = (quotes) => {
  $('#content').html(showQuotesTemplate(quotes, "cool"));
  $('#updateModal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();


  console.log('quotes is', quotes);

};


module.exports = {
  showQuotesTemplate,
  getQuotesSuccess,
  createQuoteSuccess,
  updateQuoteSuccess

};
