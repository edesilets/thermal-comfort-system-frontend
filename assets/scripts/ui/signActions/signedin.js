'use strict';

let api = require('../../api-req/access');

let dashTemplate = require('../../handlebars/dashboard.handlebars');
let changePassTemplate = require('../../handlebars/sign/changePass.handlebars');
let signOutTemplate = require('../../handlebars/sign/signOut.handlebars');
let whenLogedinNavTemplate = require('../../handlebars/sign/signinNavIn.handlebars');

// How the body should look when a user
let signedInBody = function () {
  $('#page-wrapper').empty();
  $('#page-wrapper').append(dashTemplate());
};

let changePassword = function () {
  $('.changePass-nav-button').on('click', function () {
    $('#page-wrapper').empty();
    $('#page-wrapper').append(changePassTemplate());
    $('.changePass-button').on('click', function () {
      let item = new FormData(document.querySelector('form[role="changePass"]'));
      api.changePassword(item)
      .then(signedInBody())
      .catch(console.log);
    });
  });
};

// How the Navigation bar should look for signed in user
let signedInNav = function () {
  $('.userDropDown').empty();
  $('.userDropDown').append(whenLogedinNavTemplate());
  $('.signOut-button').on('click', function () {
    api.signOut()
    .then(function () {
       localStorage.clear();
       console.log('Success is good!');
    })
    .catch(console.error);
    $('#page-wrapper').empty();
    $('.signOut').append(signOutTemplate());
  });
  changePassword();
};

module.exports = {
  signedInNav,
  signedInBody,
};
