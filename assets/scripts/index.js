'use strict';

// handlebars template require below
let dashTemplate = require('./handlebars/dashboard.handlebars');

let uiRules = require('./ui/rules.js')


let init = function() {
  $('#page-wrapper').append(dashTemplate());
  uiRules.start();
};

$(document).ready(init);

module.exports = true;
