'use strict'

const bobTemplate = require('../templates/lists/books.hbs')
const section = 'Dystopian Novels'

const books = [
  { id: 3, title: 'Animal Farm', author: 'George Orwell' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 1, title: 'Anthem', author: 'Ayn Rand' }
]

$(() => {
  const html = bobTemplate({ books, section })
  $('#view').html(html)
  $('#book-list').on('click', '.retcon', function (e) {
    // true for button.retcon click, not icon click
    if (e.target === this) {
      console.log('yay?')
    }

    const id = $(this).parent().data('book-id')
    console.log('book.id', id)
  })
})

module.exports = true
