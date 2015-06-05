'use strict';

var Game = require('../lib/tic-tac-toe.js');

var containsSet = Game.containsSet;

var fixtureGames = {
  wonX: [1, 2, 5, 3, 9],
  wonO: [1, 3, 2, 7, 4, 5],
  tied: [1, 2, 3, 5, 4, 6, 8, 7, 9],
  legalMovesX: [1, 3, 5, 9],
  legalMovesO: [1, 3, 5, 9, 7]
};

var vivifyGame = Game.vivifyGame;

describe('support functions', function() {

  describe('containsSet', function() {

    var cats = ['Domino', 'Manfred', 'Ann', 'Julian'];
    var primes = [2, 3, 5, 7, 11, 13, 17, 23];

    it('returns truthy for the empty set', function() {
      expect(containsSet(primes, [])).toBeTruthy();
      expect(containsSet(cats, [])).toBeTruthy();
    });

    it('returns truthy when one element is sought and found', function() {
      expect(containsSet(primes, [3])).toBeTruthy();
      expect(containsSet(cats, ['Manfred'])).toBeTruthy();
    });

    it('returns falsy when one element is sought and not found', function() {
      expect(containsSet(primes, [4])).toBeFalsy();
      expect(containsSet(cats, ['Marmaduke'])).toBeFalsy();
    });

    it('returns truthy when several elements are sought and found', function() {
      expect(containsSet(primes, [23, 7])).toBeTruthy();
      expect(containsSet(cats, ['Domino', 'Manfred', 'Julian'])).toBeTruthy();
    });

    it('returns falsy when several elements are sought and not all are found', function() {
      expect(containsSet(primes, [8, 23, 7])).toBeFalsy();
      expect(containsSet(cats, ['Domino', 'Manfred', 'Julian', 'Rin Tin Tin'])).toBeFalsy();
    });

  });

  describe('vivifyGame', function() {

    it('should correctly reinstate a game', function() {
      var g = new Game();
      expect(vivifyGame([])).toEqual(g);
    });
  });

  it('needs more thorough testing');
});

describe('the tic-tac-toe game object', function() {

  describe('constructor', function() {

    it('calls this.reset()', function() {
      spyOn(Game.prototype, 'reset');
      var g = new Game();
      expect(Game.prototype.reset).toHaveBeenCalled();
    });

  });

  describe('reset() method', function() {

    it('resets all fields in the object', function() {
      var g = new Game();
      g.reset();

      expect(g.moves.X).toEqual([]);
      expect(g.moves.O).toEqual([]);
      expect(g.moves.all).toEqual([]);
      expect(g.nextPlayer).toBe('X');
      expect(g.gameOver).toBeFalsy();
    });

  });

  describe('hasWon() method', function() {

    var gameXWin, gameOWin, gameTie;

    beforeEach(function() {
      gameXWin = vivifyGame(fixtureGames.wonX);
      gameOWin = vivifyGame(fixtureGames.wonO);
      gameTie = vivifyGame(fixtureGames.tied);
    });

    it('correctly detects when a player has won', function() {
      expect(gameXWin.hasWon('X')).toBeTruthy();
      expect(gameOWin.hasWon('O')).toBeTruthy();
    });

    it('identifies no winner in the case of a tie', function() {
      expect(gameTie.hasWon('O')).toBeFalsy();
      expect(gameTie.hasWon('X')).toBeFalsy();
    });

    it('marks the game as over when identifying a win', function() {
      var XWon = gameXWin.hasWon('X');
      expect(gameXWin.isOver()).toBeTruthy();
      var OWon = gameOWin.hasWon('O');
      expect(gameOWin.isOver()).toBeTruthy();
    });

    it('does not mark the game as over in the case of a tie', function() {
      var XWon = gameTie.hasWon('X');
      var OWon = gameTie.hasWon('O');
      expect(gameTie.isOver()).toBeFalsy();
    });

    it('does not notice if the player not asked about has won', function() {
      expect(gameOWin.hasWon('X')).toBeFalsy();
      expect(gameOWin.isOver()).toBeFalsy();
      expect(gameXWin.hasWon('O')).toBeFalsy();
      expect(gameXWin.isOver()).toBeFalsy();
    });
  });

  describe('boardIsFull() method', function() {

    var gameXWin, gameOWin, gameTie;

    beforeEach(function() {
      gameXWin = vivifyGame(fixtureGames.wonX);
      gameOWin = vivifyGame(fixtureGames.wonO);
      gameTie = vivifyGame(fixtureGames.tied);
    });

    it('correctly detects when the board is full', function() {
      expect(gameTie.boardIsFull()).toBeTruthy();
    });

    it('marks the game as over when it discovers the board is full', function() {
      var isGameTied = gameTie.boardIsFull();
      expect(gameTie.isOver()).toBeTruthy();
    });

    it('does not detect that the board is full when it is not', function() {
      expect(gameOWin.boardIsFull()).toBeFalsy();
      expect(gameXWin.boardIsFull()).toBeFalsy();
    });

  });

  describe('whoseTurn() method', function() {

    it('correctly reports whose turn it is at the beginning of the game', function() {
      var g = new Game();
      expect(g.whoseTurn()).toBe('X');
    });

    it('correctly reports whose turn it is after one legal move', function() {
      var g = new Game();
      g.move('X', 1);
      expect(g.whoseTurn()).toBe('O');
    });

    it('correctly reports whose turn it is after an invalid move is attempted');

  });

  describe('isOver() method', function() {
    it('should be tested');
  });

  describe('isMoveLegal() method', function() {

    var gameLegalXMove, gameLegalOMove;

    beforeEach(function() {

      // a game where all odd squares but 7 are taken and it is X's turn
      gameLegalXMove = vivifyGame(fixtureGames.legalMovesX);

      // a game where all odd squares are taken and it is O's turn
      gameLegalOMove = vivifyGame(fixtureGames.legalMovesO);
    });

    it('identifies moves as illegal when it is the wrong player', function() {
      expect(gameLegalXMove.isMoveLegal('O', 2)).toBeFalsy();
      expect(gameLegalOMove.isMoveLegal('X', 2)).toBeFalsy();
    });

    it('identifies moves as illegal when the square has been taken', function() {
      expect(gameLegalXMove.isMoveLegal('X', 1)).toBeFalsy();
      expect(gameLegalOMove.isMoveLegal('O', 1)).toBeFalsy();
    });

    it('identifies moves as illegal when the move is off the board', function() {
      expect(gameLegalOMove.isMoveLegal('O', -1)).toBeFalsy();
      expect(gameLegalXMove.isMoveLegal('X', 12)).toBeFalsy();
    });

    it('identifies moves as legal when the correct player plays a legal move in an open space', function() {
      expect(gameLegalOMove.isMoveLegal('O', 2)).toBeTruthy();
      expect(gameLegalXMove.isMoveLegal('X', 2)).toBeTruthy();
    });
  });

  describe('the move() function', function() {
    it('records the player as having moved', function() {
      var g = new Game();
      expect(g.whoPlayedAt(5)).toBeUndefined();
      g.move('X', 5);
      expect(g.whoPlayedAt(5)).toBe('X');
    });

    it('does not allow the wrong player to play', function() {
      var gameLegalOMove = vivifyGame(fixtureGames.legalMovesO);
      expect(gameLegalOMove.move('X', 2)).toBeFalsy();
    });

    it('does not allow the player to play in a taken square', function() {
      var gameLegalXMove = vivifyGame(fixtureGames.legalMovesX);
      expect(gameLegalXMove.move('X', 5)).toBeFalsy();
    });
  });

  describe('the whoPlayedAt() method', function() {
    it('correctly reports who played in a given space', function() {
      var gameXWin = vivifyGame(fixtureGames.wonX);

      expect(gameXWin.whoPlayedAt(1)).toBe('X');
      expect(gameXWin.whoPlayedAt(2)).toBe('O');
      expect(gameXWin.whoPlayedAt(3)).toBe('O');
      expect(gameXWin.whoPlayedAt(4)).toBeUndefined();
      expect(gameXWin.whoPlayedAt(5)).toBe('X');
      expect(gameXWin.whoPlayedAt(6)).toBeUndefined();
      expect(gameXWin.whoPlayedAt(7)).toBeUndefined();
      expect(gameXWin.whoPlayedAt(8)).toBeUndefined();
      expect(gameXWin.whoPlayedAt(9)).toBe('X');
    });
  });

});
