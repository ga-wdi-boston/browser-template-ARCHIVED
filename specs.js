(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// quiz questions should match objectives
// keep it simple
// be very specific in your directions
// 4 questions = about 20 minutes for students to complete
// replace the example questions with your own


// Question 1 //////////////////////////////////////////////////////////////////

var pets = ["fido", "sparky", "fluffy"];

// Write code to change the last entry in this array from "fluffy" to "spike".
// Do not modify the code above.

// YOUR CODE HERE
pets[2] = "spike";

////////////////////////////////////////////////////////////////////////////////

// DO NOT CHANGE
module.exports = {
  answer1: pets
};

},{}],2:[function(require,module,exports){
'use strict';

var quiz = require('../quiz');

describe('QUIZ', function() {
  it('has a modified array', function() {
    expect(quiz.answer1[0]).toEqual('fido');
    // expect(pets[1]).toEqual('sparky');
    // expect(pets[2]).toEqual('spike');
  });
});

},{"../quiz":1}]},{},[2]);
