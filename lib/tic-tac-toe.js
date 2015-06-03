'use strict';

// the game protocol:
//
// new Game(): creates a board which is indistinghisbable from one having just been reset().
//
// Game.prototype.reset(): resets the board so that it is indistinguishable from a newly created board.
//
// Game.prototype.hasWon(player): returns truthy iff that player has won the game.  Also sets the internal game-over flag if that player has won.
//
// Game.prototype boardIsFull(): returns truthy iff all nine squares have been taken.  Also sets the internal game-over flag if the board is full.
//
// Game.prototye.whoseTurn(): returns 'X' or 'O' to indicate the current player.





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


  isMoveLegal: function(player, square) {
    return this.turn === this.player;
    //&&
    //   square >= 1 && square <= 9 &&
    //   this.moves.all.indexOf(square) === -1;
  },

  move: function(player, square) {
    if (this.isMoveLegal(player, square)) {
      this.moves[player].push(square);
      this.moves.all.push(square);
      this.turn = this.turn === 'X' ? 'O' : 'X';
      return true;
    } else {
      return false;
    }
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


Game.containsSet = containsSet;
module.exports = Game;
