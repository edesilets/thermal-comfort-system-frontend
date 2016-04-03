'use strict';

// handlebars template require below
// Signin actions
let signUpTemplate = require('./handlebars/sign/signUp.handlebars');
let signInTemplate = require('./handlebars/sign/signIn.handlebars');
let signOutTemplate = require('./handlebars/sign/signOut.handlebars');
let changePassTemplate = require('./handlebars/sign/changePass.handlebars');

// Views
let dashTemplate = require('./handlebars/dashboard.handlebars');

let uiRules = require('./ui/rules.js');
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

  $('.changePass').append(changePassTemplate());
  $('.changePass-button').on('click', function () {
    let item = new FormData(document.querySelector('form[role="changePass"]'));
    api.changePass(item);
  });

  $('#page-wrapper').append(dashTemplate());

  uiRules.start();
};

$(document).ready(init);

module.exports = true;
