'use strict';
//remove signIn and signOut
const app = require('../app.js');

//remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

//remove me before code-along
// const signOutSuccess = () => {
//   app.user = null;
//   console.log(app);
// };

const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.");
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  // signOutSuccess,
  changePasswordSuccess
};
