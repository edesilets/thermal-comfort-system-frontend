'use strict';

// handlebars template require below
let signUpTemplate = require('./handlebars/signUp.handlebars');
let signInTemplate = require('./handlebars/signIn.handlebars');
let signOutTemplate = require('./handlebars/signOut.handlebars');
let api = require('./api-req/access');

let init = function() {
  // Main Functionaliy
  $('.signUp').append(signUpTemplate());
  $('.signUp-button').on('click', function () {
    let item = new FormData(document.querySelector('form[role="signUp"]'));
    api.signUp(item);
  });

  $('.signIn').append(signInTemplate());
  $('.signIn-button').on('click', function () {
    let item = new FormData(document.querySelector('form[role="signIn"]'));
    api.signIn(item);
  });

  // Other functions below
  $('.signOut').append(signOutTemplate());
  $('.signOut-button').on('click', function () {
    api.signOut();
  });

};

$(document).ready(init);

module.exports = true;
