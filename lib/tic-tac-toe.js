'use strict';

// the game protocol:
//
// new Game(): creates a board which is indistinghisbable
// from one having just been reset().
//
// Game.prototype.reset(): resets the board so that it is
// indistinguishable from a newly created board.
//
// Game.prototype.hasWon(player): returns truthy iff that
// player has won the game.  Also sets the internal game-
// over flag if that player has won.
//
// Game.prototype.boardIsFull(): returns truthy iff all nine
// squares have been taken.  Also sets the internal game-
// over flag if the board is full.
//
// Game.prototye.whoseTurn(): returns 'X' or 'O' to indicate
// the current player.
//
// Game.prototype.isMoveLegal(player, move): returns true or
// false to indicate the legality of the given move
//
// Game.prototype.move(player, move): makes the specified
// move, if it is legal.  Returns true if the move was legal
// and succeeded, false otherwise.
//
// Game.prototype.vififyGame(moveList): updates the game as
// if it were reset and then the moves in moveList were
// played.
//
// Game.prototype.whoPlayedAt(square): returns X, O, or
// undefined, depending on the contents of the square.

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
    this.nextPlayer = 'X';
    this.gameOver = false;
  },

  hasWon: function(player) {
    var i;
    var winFound;

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
    return this.nextPlayer;
  },
  isOver: function() {
    return this.gameOver;
  },

  isMoveLegal: function(player, square) {
    return this.nextPlayer === player &&
      this.whoPlayedAt(square) === undefined &&
      square >= 1 && square <= 9;
  },

  move: function(player, square) {
    if (this.isMoveLegal(player, square)) {
      this.moves[player].push(square);
      this.moves.all.push(square);
      this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X';
      return true;
    } else {
      return false;
    }
  },

  vivifyGame: function(gameRecord) {
    if (this.moves.all.length) {
      this.reset();
    }

    for (var i = 0; i < gameRecord.length; i++) {
      this.move(this.whoseTurn(), gameRecord[i]);
    }
  },

  whoPlayedAt: function(square) {
    if (this.moves.O.indexOf(square) !== -1) {
      return 'O';
    } else if (this.moves.X.indexOf(square) !== -1) {
      return 'X';
    } else {
      return undefined;
    }
  }
};

Game.vivifyGame = function(gameRecord) {
  var g = new Game();
  g.vivifyGame(gameRecord);
  return g;
};

Game.containsSet = containsSet;
module.exports = Game;
