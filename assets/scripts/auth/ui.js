'use strict';
const app = require('../app-data.js');


const success = (data) => {
  console.log(data);
  console.log('success');
};

const sign_in_success = (data) => {
  app.user1 = data.user;
  app.user1.authToken = data.user.token;
  console.log('user 1' + app.user1);
  console.log(data);
  console.log('signed in');
};

module.exports= {
  success,
  sign_in_success
};
