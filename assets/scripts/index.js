'use strict';

// handlebars template require below
// Views
let dashTemplate = require('./handlebars/dashboard.handlebars');

let uiSign = require('./ui/sign.js');

let init = function() {
  if ((localStorage.getItem('token') && localStorage.getItem('id'))) {
    uiSign.signedInView();
  } else {
    uiSign.signClickHandlers();
  }
};

$(document).ready(init);

module.exports = true;
