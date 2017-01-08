'use strict';

const Handlebars = require('handlebars');

// This should really use arguments to handle required and optional
module.exports = function (title, nesting /*, options*/) {
  nesting = +nesting || 1;
  return new Handlebars.SafeString(`<h${nesting}>${title}</h${nesting}>`);
};
