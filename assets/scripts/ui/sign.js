'use strict';

let api = require('../api-req/access');
let append = require('./signActions/signedin');
let uiRules = require('../ui/rules.js');

// Signin actions
let signUpTemplate = require('../handlebars/sign/signUp.handlebars');
let signInTemplate = require('../handlebars/sign/signIn.handlebars');

let signedInView = function () {
  append.signedInNav();
  append.signedInBody();
  uiRules.start();
};

let up = function () {
  $('#page-wrapper').empty();
  $('#page-wrapper').append(signUpTemplate());
  $('.signUp-button').on('click', function () {
    $('#page-wrapper').empty();
    $('.signUp').append(signUpTemplate());
    let item = new FormData(document.querySelector('form[role="signUp"]'));
    api.signUp(item)
    .then(() => signedInView())
    .catch(console.log);
  });
};

let In = function () {
  $('#page-wrapper').empty();
  $('#page-wrapper').append(signInTemplate());
  $('.signIn-button').on('click', function () {
    let item = new FormData(document.querySelector('form[role="signIn"]'));
    api.signIn(item)
    .then(() => signedInView())
    .catch(console.log);
  });
};

module.exports = {
  up,
  In,
};
