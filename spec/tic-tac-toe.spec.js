var Game = require('../tic-tac-toe.js');

var containsSet = Game.containsSet;

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
      expect(g.turn).toBe('X');
      expect(g.gameOver).toBeFalsy();
    });

  });

  describe('hasWon() method', function() {

    var gameXWin, gameOWin, gameTie;

    beforeEach(function() {
      gameXWin = new Game();

      gameXWin.move('X', 1);
      gameXWin.move('O', 2);
      gameXWin.move('X', 5);
      gameXWin.move('O', 3);
      gameXWin.move('X', 9);

      gameOWin = new Game();

      gameOWin.move('X', 1);
      gameOWin.move('O', 3);
      gameOWin.move('X', 2);
      gameOWin.move('O', 7);
      gameOWin.move('X', 4);
      gameOWin.move('O', 5);

      gameTie = new Game();

      gameTie.move('X', 1);
      gameTie.move('O', 2);
      gameTie.move('X', 3);
      gameTie.move('O', 5);
      gameTie.move('X', 4);
      gameTie.move('O', 6);
      gameTie.move('X', 8);
      gameTie.move('O', 7);
      gameTie.move('X', 9);
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

});
