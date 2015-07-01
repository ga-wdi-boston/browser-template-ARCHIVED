'use strict';

var quiz = require('../quiz');

describe('QUIZ', function() {
  it('has a modified array', function() {
    expect(quiz.answer1[0]).toEqual('fido');
    // expect(pets[1]).toEqual('sparky');
    // expect(pets[2]).toEqual('spike');
  });
});
