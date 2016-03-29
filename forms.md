# Forms

Developers should use `getFormFields` to retrieve data from html forms for API
 requests:

**in `api.js`**

```js
const ajaxDefaults = {
  url: 'http://localhost:3000',
  processData: false,
  contentType: false,
};

const myApiRequest = (data, success, fail) => {
  $.ajax(Object.assign({method: 'POST', data}, ajaxDefaults))
  .done(success)
  .fail(fail);
};

module.exports = {
  myApiRequest,
};
```

**in `ui.js`**

```js

const getFormFields = require('../../lib/get-form-fields');
const api = require('./api.js');

const success = (data) => {
  // handle success
};

const fail = (err) => {
  // handle failure
};

$('#my-form').on('submit', function (e) {
  e.preventDefault();
  api.myApiRequest(getFormFields(this), success, fail);
});
```
