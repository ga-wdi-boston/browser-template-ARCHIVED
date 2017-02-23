'use strict';

const config = require('../config');
const store = require('../store');

const createReview = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'POST',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    },
    data,
  });
};

const getReviews = function () {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'GET',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    }
  });
};

const updateReview = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + data.review.id,
    method: 'PATCH',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    },
    data,
  });
};

const removeReview = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  createReview,
  getReviews,
  updateReview,
  removeReview
};
