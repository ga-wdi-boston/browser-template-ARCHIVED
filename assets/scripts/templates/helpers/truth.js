'use strict';

const store = require('../../store');

module.exports = function (book, options) {
  return book.title === store.revise ? options.fn(this) : '';
};
