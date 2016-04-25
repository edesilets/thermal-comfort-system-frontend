'use strict';

let api = require('../api-req/access');
let ui = require('../ui/sideNavBar');

let mqttDash = require('./dashboard/feeds.js');

// Signin actions
let signUpTemplate = require('../handlebars/sign/signUp.handlebars');
let signInTemplate = require('../handlebars/sign/signIn.handlebars');

// Dash Templates
let dashTemplate = require('../handlebars/dashboard.handlebars');
let changePassTemplate = require('../handlebars/sign/changePass.handlebars');
let whenLogedinNavTemplate = require('../handlebars/sign/signinNavIn.handlebars');
let whenLogedOutNavTemplate = require('../handlebars/sign/signinNavOut.handlebars');
let sideNavTemplate = require('../handlebars/sideNav.handlebars');

// How the body should look when a user
let signedInBody = function () {
  $('#page-wrapper').empty();
  $('#page-wrapper').append(dashTemplate());
  $('.side-nav').empty();
  $('.side-nav').append(sideNavTemplate());
  mqttDash.displayFeedsOnDashboard();
};

let signedInView = function () {
  signedInNav();
  signedInBody();
  ui.bindNavBarButtons();
};

let bindSignUp = function () {
  $('li[data-role="signup"]').on('click', function () {
    $('#page-wrapper').empty();
    $('#page-wrapper').append(signUpTemplate());
    $('.signUp-button').on('click', function () {
      let item = new FormData(document.querySelector('form[role="signUp"]'));
      api.signUp(item)
      .then(() => signedInView())
      .catch((data) => console.error(data));
    });
  });
};

let bindSignIn = function () {
  $('li[data-role="login"]').on('click', function () {
    $('#page-wrapper').empty();
    $('#page-wrapper').append(signInTemplate());
    $('.signIn-button').on('click', function () {
      let item = new FormData(document.querySelector('form[role="signIn"]'));
      api.signIn(item)
      .then(() => signedInView())
      .catch((data) => console.error(data));
    });
  });
};

let bindChangePassword = function () {
  $('.changePass-nav-button').on('click', function () {
    $('#page-wrapper').empty();
    $('#page-wrapper').append(changePassTemplate());
    $('.changePass-button').on('click', function () {
      let item = new FormData(document.querySelector('form[role="changePass"]'));
      api.changePassword(item)
      .then(signedInBody())
      .catch((data) => console.error(data));
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
       $('.side-nav').empty();
       $('.userDropDown').empty();
       $('.userDropDown').append(whenLogedOutNavTemplate());
       $('#page-wrapper').empty();
       $('#page-wrapper').append(dashTemplate());
       bindSignIn();
       bindSignUp();
    })
    .catch((data) => console.error(data));
  });
  bindChangePassword();
};

let signClickHandlers = function () {
  $('.userDropDown').append(whenLogedOutNavTemplate());
  $('#page-wrapper').append(dashTemplate());
  mqttDash.displayFeedsOnDashboard();
  bindSignIn();
  bindSignUp();
};

module.exports = {
  signedInView,
  signClickHandlers,
};
