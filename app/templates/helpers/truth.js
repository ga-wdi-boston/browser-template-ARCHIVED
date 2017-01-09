'use strict';

const store = require('../../scripts/store');

module.exports = function (book, options) {
  return book.title === store.revise ? options.fn(this) : '';
};
