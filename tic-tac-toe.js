x `'use strict';

var containsSet = function(array, set) {
  var unmatched = set.filter(function(e) {
    return array.indexOf(e) === -1;
  });

  return set.length === 0 || unmatched.length === 0;
};

// this is how we number squares:
//
//  1 | 2 | 3
// ---+---+---
//  4 | 5 | 6
// ---+---+---
//  7 | 8 | 9
//

var Game = function() {
  this.reset();
};

Game.winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

Game.prototype = {

  reset: function() {
    this.moves = {
      X: [],
      O: [],
      all: []
    };
    this.turn = 'X';
    this.gameOver = false;
  },

  hasWon: function(player) {
    var i, winFound;

    for (i = 0; i < Game.winConditions.length && !winFound; i++) {
      winFound = winFound || containsSet(this.moves[player], Game.winConditions[i]);
    }

    if (winFound) {
      this.gameOver = true;
    }

    return winFound;
  },

  boardIsFull: function() {
    var full = this.moves.all.length === 9;

    if (full) {
      this.gameOver = true;
    }

    return full;
  },

  whoseTurn: function() {
    return this.turn;
  },

  isOver: function() {
    return this.gameOver;
  },

  isMoveLegal: function(player, move) { //
    return this.turn === player;
    //&&
    //   square >= 1 && square <= 9 &&
    //   this.moves.all.indexOf(square) === -1;
  },

  makeMove: function(player, move) {
    console.log('making move ' + move);
    console.log('before');
    console.log(this);
    this.moves[player].push(move);
    this.moves.all.push(move);
    this.turn = this.turn === 'X' ? 'O' : 'X';
    console.log('after');
    console.log(this);
    return true;
  },

  whoOwnsSquare: function(square) {
    var playerList = ['X', 'O'].filter(function(player) {
      return this.moves[player].indexOf(square) !== -1;
    });
    return playerList[0];
  },

  vivifyGame: function(gameRecord) {
    console.log('vivify');
    console.log(gameRecord);
    if (this.moves.all.length) {
      this.reset();
    }
    gameRecord.forEach(function(move) {
      this.move(this.whoseTurn(), move);
    });
  },

  drawBoard: function() {
    var cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.moves.X.forEach(function(m) {
      cells[m - 1] = 'X';
    });
    this.moves.O.forEach(function(m) {
      cells[m - 1] = 'O';
    });
    cells = cells.map(function(e) {
      return ' ' + e + ' ';
    });

    var boardLines = [];
    boardLines.push(cells.slice(0, 3).join('|'));
    boardLines.push('---+---+---');
    boardLines.push(cells.slice(3, 6).join('|'));
    boardLines.push('---+---+---');
    boardLines.push(cells.slice(6, 9).join('|'));

    return boardLines.join('\n');
  }
};

Game.vivifyGame = function(gameRecord) {
  var g = new Game();
  g.vivifyGame(gameRecord);
  return g;
};

Game.containsSet = containsSet;
module.exports = Game;
