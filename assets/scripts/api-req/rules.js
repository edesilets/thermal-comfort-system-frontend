'use strict';
// Require js files below
// dont for get to checkout localstorage!
//"http://httpbin.org/post",
const env = require('../env.js');

let index = function(onSuccess, onFailure) {
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
  .then(onSuccess)
  .catch(onFailure);
};

module.exports = {
index
};
