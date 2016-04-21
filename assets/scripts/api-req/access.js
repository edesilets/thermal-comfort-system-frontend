'use strict';
//"http://httpbin.org/post",
const env = require('../env.js');

let setStorage = function (data) {
  let userInfo = data.user;
  localStorage.setItem('email', userInfo.email);
  localStorage.setItem('id', userInfo.id);
  localStorage.setItem('token', userInfo.token);
};

let signUp = function(item) {
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
  .then((data) => setStorage(data))
};

let signIn = function(item) {
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
  .then((data) => setStorage(data))
};

let signOut = function() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: env.url + 'sign-out/' + localStorage.getItem('id'),
      type: 'DELETE',
      headers: {
          Authorization: 'Token token=' + localStorage.getItem('token'),
        }
    })
    .done((result) => resolve(result))   // HACK: This should be resolve but backends is sending wrong Status Code forward.
    .fail((reason) => reject(reason));
  })
};

let changePassword = function(item) {
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
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
