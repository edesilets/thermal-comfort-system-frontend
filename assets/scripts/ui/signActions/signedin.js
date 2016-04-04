'use strict';

// How the Navigation bar should look for signed in user
let signedInNav = function () {
  $('.userDropDown').empty();
  let whenLogedinNavTemplate = require('../../handlebars/sign/signinNavIn.handlebars');
  $('.userDropDown').append(whenLogedinNavTemplate());
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
