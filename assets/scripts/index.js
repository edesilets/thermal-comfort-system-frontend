'use strict';

// handlebars template require below
let signUpTemplate = require('./handlebars/signUp.handlebars');
let api = require('./api-req/access');

let init = function() {
  // Main Functionaliy
  $('.signUp').append(signUpTemplate());
  $('.signUp-button').on('click', function () {
    let item = new FormData(document.querySelector('form[role="signUp"]'));
    api.signUp(item);
  });
};

$(document).ready(init);

module.exports = true;
