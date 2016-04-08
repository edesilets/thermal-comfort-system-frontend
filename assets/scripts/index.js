'use strict';

// handlebars template require below
// Views
let whenLogedoutNavTemplate = require('./handlebars/sign/signinNavOut.handlebars');
let dashTemplate = require('./handlebars/dashboard.handlebars');

let uiSign = require('./ui/sign.js');

let init = function() {
  // Main Functionaliy
  //ADD IF STATEMENT FOR localStorage CHECK IF USER IS LOGGED IN.
  $('.userDropDown').append(whenLogedoutNavTemplate());
  $('#page-wrapper').append(dashTemplate());
  $('li[data-role="login"]').on('click', uiSign.In);
  $('li[data-role="signup"]').on('click', uiSign.up);
  // Other functions below
};

$(document).ready(init);

module.exports = true;
