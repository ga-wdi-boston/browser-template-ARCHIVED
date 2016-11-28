'use strict';

const parseNestedQuery = require('./parse-nested-query');

/*
  possibilites to handle:

  front-end local, api local
  front-end local, api remote - prod=true
  front-end remote, api local - dev=true
  front-end remote, api remote
*/

const setAPIOrigin = (location, config) => {
  // strip the leading `'?'`
  const search = parseNestedQuery(location.search.slice(1));

  if (search.environment === 'development' ||
      location.hostname === 'localhost' &&
      search.environment !== 'production') {
    if (!(config.apiOrigin = config.apiOrigins.development)) {
      let port = +('GA'.split('').reduce((p, c) =>
        p + c.charCodeAt().toString(16), '')
      );
      config.apiOrigin = `http://localhost:${port}`;
    }
  } else {
    config.apiOrigin = config.apiOrigins.production;
  }
};

module.exports = setAPIOrigin;
