'use strict';

var readline = require('readline');
var async = require('async');

var TTT = require('./lib/tic-tac-toe.js');
var game = new TTT();

var io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('Welcome to Tic-Tac-Toe');

var gameShouldContinue = function() {
  return !game.isOver();
};

var playTurn = function(done) {
  var player = game.whoseTurn();

  process.stdout.write(game.drawBoard());
  process.stdout.write('\n\nIt is ' + player + '\'s turn\n\n');

  io.question('Where do you wish to play?', function(answer) {
    var squareNum = parseInt(answer, 10);

    if (game.legalMove(player, squareNum)) {
      game.move(player, squareNum);
    } else {
      process.stdout.write('That is not a legal move.\n');
    }

    done();
  });
};

var handleError = function(error) {
  console.log(error);
};

async.until(
  gameShouldContinue,
  playTurn,
  handleError);
