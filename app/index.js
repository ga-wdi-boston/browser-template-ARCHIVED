'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./scripts/index.js');

// styles
require('./styles/index.scss');

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');

// copy static files to build directory
require('./index.html');
require('./favicon.ico');
