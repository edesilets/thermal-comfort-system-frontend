'use strict';

let uiSign = require('./ui/sign.js');

let init = function() {
  if ((localStorage.getItem('token') && localStorage.getItem('id'))) {
    uiSign.signedInView();
  } else {
    // Signed Out view includes Dash with feeds along with click hanglers for nav
    uiSign.signClickHandlers();
  }
};

$(document).ready(init);

module.exports = true;
