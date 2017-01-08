'use strict'

const bobTemplate = require('./templates/lists/books.hbs')
const section = 'Dystopian Novels'
const books = [
  { title: 'Animal Farm', author: 'George Orwell' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Anthem', author: 'Ayn Rand' }
]

$(() => {
  const html = bobTemplate({ books, section })
  $('#view').html(html)
})

module.exports = true
