'use strict';

let api = require('../api-req/access');
let append = require('./signActions/signedin');
let uiRules = require('../ui/rules.js');

// Signin actions
let signUpTemplate = require('../handlebars/sign/signUp.handlebars');
let signInTemplate = require('../handlebars/sign/signIn.handlebars');
let signOutTemplate = require('../handlebars/sign/signOut.handlebars');
let changePassTemplate = require('../handlebars/sign/changePass.handlebars');

let resetBody = function () {
  $('#page-wrapper').empty();
};

let up = function () {
  resetBody();
  $('#page-wrapper').append(signUpTemplate());
  $('.signUp-button').on('click', function () {
    let item = new FormData(document.querySelector('form[role="signUp"]'));
    api.signUp(item);
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
      localStorage.setItem('token', data);
      console.log(data);
      append.signedInNav();
      append.signedInBody();
      uiRules.start();
    });
  });
};

let out = function () {
  $('.signOut-button').on('click', function () {
    api.signOut();
    resetBody();
    $('.signOut').append(signOutTemplate());
  });
};

let changePass = function () {
  $('.changePass-button').on('click', function () {
    let item = new FormData(document.querySelector('form[role="changePass"]'));
    api.changePass(item);
    resetBody();
    $('.changePass').append(changePassTemplate());
  });
};

module.exports = {
  up,
  In,
  out,
  changePass
};
