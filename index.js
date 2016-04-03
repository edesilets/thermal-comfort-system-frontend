'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js');

// styles
require('./assets/styles/index.scss');
// Custom CSS
require('./assets/styles/css/sb-admin-rtl.css');
require('./assets/styles/css/sb-admin.css');
// plugins

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');
