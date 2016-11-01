'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets2/scripts2/index.js');

// styles
require('./assets2/styles2/index.scss');

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');
