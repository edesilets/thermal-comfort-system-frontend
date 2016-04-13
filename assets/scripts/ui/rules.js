'use strict';

let rules = require('./rules/createRule');

let start = function() {
  $('li[data-role="rules"]').on('click', function() {
    rules.createTable();
  });
};

module.exports = {
  start
};
