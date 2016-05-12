'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

require('../../lib/router.js');

let router = new Router["default"]();

router.map(function(match) {
  // match("/posts").to("postIndex");
  match('/about').to('about');
  debugger;
});
debugger;
// debugger;
// router.map(function() {
//   debugger;
//   this.route('about', { path: '/about' });
//   this.route('favorites', { path: '/favs' });
// });


let myHandlers = {};
//
myHandlers.about = {
  model: function(params) {
    debugger;
    return App.Post.findAll();
  },

  setup: function(posts) {
    debugger;
    // render a template with the posts
  }
};
//
router.getHandler = function(name) {
  debugger;
  return myHandlers[name];
};
