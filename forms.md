# Forms

Developers should use `getFormFields` to retrieve data from html forms for API
 requests:

**in `api.js`**

```js
'use strict';

const ajaxDefaults = {
  url: 'http://localhost:3000',
  processData: false,
};

const myRequest = (data, success, fail) => {
  $.ajax(Object.assign({ method: 'POST', data }, ajaxDefaults))
  .done(success)
  .fail(fail);
};

module.exports = {
  myRequest,
};
```

**in `ui.js`**

```js
'use strict';

const success = (data) => {
  // handle success
};

const fail = (err) => {
  // handle failure
};

module.exports = {
  success,
  fail,
}
```

**in `index.js`**

```js
'use strict';

const getFormFields = require('../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

$(() => {
  $('#my-form').on('submit', function (e) {
    let data = getFormFields(this);
    e.preventDefault();
    api.myRequest(data, ui.success, ui.fail);
  });  
});
```
