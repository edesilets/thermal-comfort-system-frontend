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
  .done(onSuccess)
  .fail(onFailure);
};

module.exports = {
  signUp,
};
