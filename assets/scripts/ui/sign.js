'use strict';

let api = require('../api-req/access');
let append = require('./signActions/signedin');
let uiRules = require('../ui/rules.js');

// Signin actions
let signUpTemplate = require('../handlebars/sign/signUp.handlebars');
let signInTemplate = require('../handlebars/sign/signIn.handlebars');

let resetBody = function () {
  $('#page-wrapper').empty();
};

let up = function () {
  resetBody();
  $('#page-wrapper').append(signUpTemplate());
  $('.signUp-button').on('click', function () {
    let item = new FormData(document.querySelector('form[role="signUp"]'));
    api.signUp(item, function () {
      append.signedInNav();
      append.signedInBody();
      uiRules.start();
    });
    resetBody();
    $('.signUp').append(signUpTemplate());
    console.log('hit up');
  });
};

let In = function () {
  resetBody();
  $('#page-wrapper').append(signInTemplate());
  console.log('hit in');
  $('.signIn-button').on('click', function () {
    let item = new FormData(document.querySelector('form[role="signIn"]'));
    api.signIn(item, function (data) {
      append.signedInNav();
      append.signedInBody();
      uiRules.start();
    });
  });
};

module.exports = {
  up,
  In,
};
