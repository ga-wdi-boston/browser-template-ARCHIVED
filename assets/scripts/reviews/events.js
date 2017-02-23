'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onCreateReview = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.createReview(data)
    .then((response) => {
      store.review = response.review;
      onGetReviews();
    })
    .then(ui.createReviewSuccess)
    .catch(ui.createReviewFailure);
};

const onGetReviews = function () {
  api.getReviews()
    .then((response) => {
      store.reviews = response.reviews;
      ui.getReviewSuccess();
    })
    .catch(ui.getReviewFailure);
};

const onUpdateReview = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateReview(data)
    .then(ui.UpdateReviewSuccess)
    .then(() => {
      onGetReviews();
      $('#editModal').modal('hide');
    })
    .catch(ui.UpdateReviewFailure);
};

const onRemoveReview = function (event) {
  let reviewId = $(this).data().reviewid;
  event.preventDefault();
  api.removeReview(reviewId)
    .then(ui.removeReviewSuccess)
    .then(onGetReviews)
    .catch(ui.removeReviewFailure);
};

const addHandlers = () => {
  $('#create-review').on('submit', onCreateReview);
  $('#show-reviews').on('click', onGetReviews);
  $('.review-show').on('click', '.review-delete', onRemoveReview);
  // $('.review-show').on('click', '.review-edit', openEditModal);
  // $('#editModal').on('submit', 'form.edit-review', onUpdatereview);
};

module.exports = {
  addHandlers,
};
