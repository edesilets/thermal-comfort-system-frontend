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
};

// How the body should look when a user
let signedInBody = function () {
  $('#page-wrapper').empty();
  let dashTemplate = require('../../handlebars/dashboard.handlebars');
  $('#page-wrapper').append(dashTemplate());
};

module.exports = {
signedInNav,
signedInBody,
};
