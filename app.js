'use strict';

var async = require('async');

var readline = require('readline');
var io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

io.setPrompt('> ');

var TTT = require('./lib/tic-tac-toe.js');
var game = new TTT();

var drawBoard = function(game) {
  var cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  cells.forEach(function(cell, i, array) {
    array[i] = ' ' + (game.whoPlayedAt(cell) || cell) + ' ';
  });

  return [
    cells.slice(0, 3).join('|'),
    '---+---+---',
    cells.slice(3, 6).join('|'),
    '---+---+---',
    cells.slice(6, 9).join('|')
  ].join('\n');
};

process.stdout.write('Welcome to Tic-Tac-Toe\n\n');

var moveCount = 0;

var gameShouldContinue = function() {
  return !game.isOver();
};

var playTurn = function(done) {
  var player = game.whoseTurn();

  process.stdout.write(drawBoard(game));
  process.stdout.write('\n\nIt is ' + player + '\'s turn\n\n');

  io.question('Where do you wish to play?', function(answer) {
    var num = parseInt(answer, 10);

    if (game.isMoveLegal(player, num)) {
      game.move(player, num);
    } else {
      process.stdout.write('That is not a legal move.\n');
    }

    if (game.hasWon(player)) {
      process.stdout.write('Player ' + player + ' wins!\n\n');
    } else if (game.boardIsFull()) {
      process.stdout.write('The game is a tie.\n\n');
    }

    done();
  });
};

var gameDone = function(done) {
  process.stdout.write('Thank you for playing.\n');
  io.close();
};

async.whilst(
  gameShouldContinue,
  playTurn,
  gameDone);
