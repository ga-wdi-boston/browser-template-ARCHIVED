var readline = require('readline');
var async = require('async');

var TTT = require('./tic-tac-toe.js');
var game = new TTT();

var io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

io.setPrompt('> ');

console.log('Welcome to Tic-Tac-Toe');

var gameShouldContinue = function () {
  return !game.isOver();
};

var playTurn = function(callback) {
  var player = game.whoseTurn();

  process.stdout.write(game.drawBoard());
  process.stdout.write('\n\nIt is ' + player + '\'s turn\n\n');

  io.question('Where do you wish to play?', function(answer) {
    var squareNum = parseInt(answer, 10);
    
    console.log('You chose ' + squareNum);
    
    if(game.legalMove(player, squareNum)) {
      game.move(player, squareNum);
    } else {
      process.stdout.write('That is not a legal move.\n');
    }

    callback();
  });
};

var handleError = function(error) {
  console.log(error);
};

async.until(
  game.isOver.bind(game),
  playTurn,
  handleError);


//       if (game.legalMove(player, squareNum)) {
//         game.move(player, squareNum);
//       } else {
//         process.stdout.write('That is not a legal move.\n');
//       }
//       cb();
