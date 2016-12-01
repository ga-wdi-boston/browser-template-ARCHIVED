'use strict';

const showQuotesTemplate = require('../templates/quote-listing.handlebars');


const getQuotesSuccess = (quotes) => {
  $('#content').html(showQuotesTemplate(quotes));
    console.log(quotes);

};


module.exports = {
  showQuotesTemplate,
  getQuotesSuccess,
};
