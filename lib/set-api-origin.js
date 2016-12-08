'use strict';

const parseNestedQuery = require('./parse-nested-query');

/*
  possibilites to handle and example URLs:

  client local, api local
    http://localhost:7165/
  client local, api remote
    http://localhost:7165/?environment=production
  client remote, api local
    https://ga-wdi-boston.github.io/browser-template/?environment=development
    This will require allowing "unsafe scripts" in Chrome
  client remote, api remote
    https://ga-wdi-boston.github.io/browser-template/
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
