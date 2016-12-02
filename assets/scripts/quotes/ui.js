'use strict';
const store = require('../store')
const showQuotesTemplate = require('../templates/quote-listing.handlebars');
const api = require('./api');


const getQuotesSuccess = (quotes) => {
  $('#content').html(showQuotesTemplate(quotes, "cool"));
    console.log(quotes);

};


module.exports = {
  showQuotesTemplate,
  getQuotesSuccess,
};
