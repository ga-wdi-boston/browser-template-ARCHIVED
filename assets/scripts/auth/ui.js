'use strict';
const app = require('../app-data.js');

const success = (data) => {
  console.log(data);
  console.log('success');
};

// const sign_out_success = (data) =>{
//   console.log(data);
//   console.log('success');
// };

const sign_in_success = (data) => {
  app.user1 = data.user;
  app.user1.authToken = data.user.token;
  console.log(app.user1.id);
  console.log(data);
  console.log('signed in');
  $('.btn').removeClass('disabled');
};

module.exports = {
  success,
  sign_in_success,
};
