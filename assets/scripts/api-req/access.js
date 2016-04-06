'use strict';
// Require js files below
// dont for get to checkout localstorage!
//"http://httpbin.org/post",
const env = require('../env.js');

let signUp = function(item, onSuccess, onFailure) {
  $.ajax({
    url: env.url + 'sign-up',
    type: 'POST',
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(function (data) {
    localStorage.setItem('email', data.user.email);
    localStorage.setItem('id', data.user.id);
    localStorage.setItem('token', data.user.token);
  }, onSuccess)
  .fail(onFailure);
};

let signIn = function(item, onSuccess, onFailure) {
  $.ajax({
    url: env.url + 'sign-in',
    type: 'POST',
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(function (data) {
    localStorage.setItem('email', data.user.email);
    localStorage.setItem('id', data.user.id);
    localStorage.setItem('token', data.user.token);
  }, onSuccess)
  .fail(onFailure);
};

let signOut = function(onSuccess, onFailure) {
  $.ajax({
    url: env.url + 'sign-out/' + localStorage.getItem('id'),
    type: 'DELETE',
    headers: {
        Authorization: 'Token token=' + localStorage.getItem('token'),
      }
  })
  .done(function () {
     localStorage.clear();
     console.log('Success is good!');
  }, onSuccess)
  .fail(function () {
     localStorage.clear();
     console.log('Failure is good backend needs to be fixed');
  }, onFailure);
};

let changePass = function(item, onSuccess, onFailure) {
  $.ajax({
    url: env.url + 'change-password/' + localStorage.getItem('id'),
    type: 'PATCH',
    headers: {
        Authorization: 'Token token=' + localStorage.getItem('token'),
      },
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(function (data) {
    localStorage.setItem('token', data.user.token);
  }, onSuccess)
  .fail(onFailure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
};
