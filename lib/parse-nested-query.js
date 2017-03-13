'use strict'

const addNestedValue = require('./add-nested-value')

const parseNestedQuery = queryString =>
  queryString.split('&')
    .reduce((memo, element) => {
      if (element) {
        const keyValuePair = element.split('=')
        memo = addNestedValue(memo, keyValuePair[0], keyValuePair[1])
      }

      return memo
    }, {})

module.exports = parseNestedQuery
