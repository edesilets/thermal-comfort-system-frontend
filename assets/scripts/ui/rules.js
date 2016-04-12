'use strict';

let rulesTemplate = require('../handlebars/rules.handlebars');
let createRule = require('./rules/createRule');

let start = function() {
  $('li[data-role="rules"]').on('click', function() {
    console.log('rules clicked');
  new Promise(function(resolve, reject) {
    $('#page-wrapper').empty();
    $('#page-wrapper').append(rulesTemplate());
    return resolve();
    if (false) {
      reject();
    }
  })
  .then(function () {
    $('#page-wrapper').empty();
    $('#page-wrapper').append(rulesTemplate());
  })
  .then(function () {
    createRule.table();
  })
  .catch(console.log);
  });
};

module.exports = {
  start
};
