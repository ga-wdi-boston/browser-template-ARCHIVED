'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game_logic/logic.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
});
