'use strict';
// Require js files below
// dont for get to checkout localstorage!
//"http://httpbin.org/post",
const env = require('../env.js');

let getAllRules = function() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: env.url + "rules/",
      method: 'GET',
      headers: {
        Authorization: 'Token token='+ localStorage.getItem('token'),
      },
      dataType: 'json'
    })
    .done((result) => resolve(result))
    .fail((reason) => reject(reason));
  })
};

let getOneRule = function(id) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: env.url + "rules/" + id,
      method: 'GET',
      headers: {
        Authorization: 'Token token='+ localStorage.getItem('token'),
      },
      dataType: 'json'
    })
    .done((result) => resolve(result))
    .fail((reason) => reject(reason));
  })
};

let createRule = function(item) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: env.url + 'rules',
      type: 'POST',
      contentType: false,                     // Needed for FormData
      processData: false,                     // Needed for FormData This is because item
      headers: {
        Authorization: 'Token token='+ localStorage.getItem('token'),
      },
      data: item                              // item is referancing the new object called 'item'.
    })
    .done((result) => resolve(result))
    .fail((reason) => reject(reason));
  })
};

let updateRule = function(id, item) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: env.url + 'rules/' + id,
      type: 'PATCH',
      contentType: false,                     // Needed for FormData
      processData: false,                     // Needed for FormData This is because item
      headers: {
        Authorization: 'Token token='+ localStorage.getItem('token'),
      },
      data: item                              // item is referancing the new object called 'item'.
    })
    .done((result) => resolve(result))
    .fail((reason) => reject(reason));
  })
};

let deleteRule = function(id) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: env.url + 'rules/' + id,
      type: 'DELETE',
      headers: {
        Authorization: 'Token token='+ localStorage.getItem('token'),
      },
    })
    .done((result) => resolve(result))
    .fail((reason) => reject(reason));
  })
};

module.exports = {
  getAllRules,
  getOneRule,
  createRule,
  updateRule,
  deleteRule,
};
