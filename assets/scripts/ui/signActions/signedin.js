'use strict';

let api = require('../../api-req/access');
// How the Navigation bar should look for signed in user
let signedInNav = function () {
  let signOutTemplate = require('../../handlebars/sign/signOut.handlebars');
  let whenLogedinNavTemplate = require('../../handlebars/sign/signinNavIn.handlebars');
  $('.userDropDown').empty();
  $('.userDropDown').append(whenLogedinNavTemplate());
  $('.signOut-button').on('click', function () {
    api.signOut();
    $('#page-wrapper').empty();
    $('.signOut').append(signOutTemplate());
  });
  changePass();
};

// How the body should look when a user
let signedInBody = function () {
  $('#page-wrapper').empty();
  let dashTemplate = require('../../handlebars/dashboard.handlebars');
  $('#page-wrapper').append(dashTemplate());
};

let changePass = function () {
  $('.changePass-nav-button').on('click', function () {
    let changePassTemplate = require('../../handlebars/sign/changePass.handlebars');
    $('#page-wrapper').empty();
    $('#page-wrapper').append(changePassTemplate());
    $('.changePass-button').on('click', function () {
      let item = new FormData(document.querySelector('form[role="changePass"]'));
      api.changePass(item,signedInBody);
    });
  });
};

module.exports = {
signedInNav,
signedInBody,
};
