'use strict';
// Require js files below
// dont for get to checkout localstorage!
//"http://httpbin.org/post",
const env = require('../env.js');

let signUp = function(item, onSuccess, onFailure) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: env.url + 'sign-up',
      type: 'POST',
      contentType: false,                     // Needed for FormData
      processData: false,                     // Needed for FormData This is because item
      data: item                              // item is referancing the new object called 'item'.
    })
    .done((result) => resolve(result))
    .fail((reason) => reject(reason));
  })
  .then(function (data) {
    localStorage.setItem('email', data.user.email);
    localStorage.setItem('id', data.user.id);
    localStorage.setItem('token', data.user.token);
  })
  .then(onSuccess)
  .catch(onFailure);
};

let signIn = function(item, onSuccess, onFailure) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: env.url + 'sign-in',
      type: 'POST',
      contentType: false,                     // Needed for FormData
      processData: false,                     // Needed for FormData This is because item
      data: item,                             // item is referancing the new object called 'item'.
    })
    .done((result) => resolve(result))
    .fail((reason) => reject(reason));
  })
  .then(function (data) {
    localStorage.setItem('email', data.user.email);
    localStorage.setItem('id', data.user.id);
    localStorage.setItem('token', data.user.token);
  })
  .then(onSuccess)
  .catch(onFailure);
};

let signOut = function(onSuccess, onFailure) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: env.url + 'sign-out/' + localStorage.getItem('id'),
      type: 'DELETE',
      headers: {
          Authorization: 'Token token=' + localStorage.getItem('token'),
        }
    })
    .done((result) => resolve(result))   // HACK: This should be resolve but backends is sending wrong Status Code foward.
    .fail((reason) => reject(reason));
  })
  .then(function (data) {
     localStorage.clear();
     console.log('Success is good!');
  })
  .then(onSuccess)
  .catch(function () {
    //localStorage.clear();
    console.log('failure is good!');
    // /onFailure;
  });
};

let changePass = function(item, onSuccess, onFailure) {
  return new Promise(function(resolve, reject) {
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
    .done((result) => resolve(result))
    .fail((reason) => reject(reason));
  })
  .then(function (data) {
    localStorage.setItem('token', data.user.token);
  })
  .then(onSuccess)
  .catch(onFailure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
};
