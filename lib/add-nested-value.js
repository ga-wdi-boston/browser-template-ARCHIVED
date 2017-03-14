'use strict'

const addNestedValue = function (pojo, name, value) {
  const recurse = function recurse (pojo, keys, value) {
    value = decodeURIComponent(value)
    const key = decodeURIComponent(keys.shift())
    const next = keys[0]
    if (next === '') { // key is an array
      pojo[key] = pojo[key] || []
      pojo[key].push(value)
    } else if (next) { // key is a parent key
      pojo[key] = pojo[key] || {}
      recurse(pojo[key], keys, value)
    } else { // key is the key for value
      pojo[key] = value
    }

    return pojo
  }

  const keys = name.split('[').map((k) => k.replace(/]$/, ''))
  return recurse(pojo, keys, value)
}

module.exports = addNestedValue
