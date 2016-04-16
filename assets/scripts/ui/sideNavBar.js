'use strict';

let rules = require('./rules/createRule');

let bindNavBarButtons = function() {
  $('#home [data-role="rules"]').on('click', function() {
    rules.createTable();
  });
};

module.exports = {
  bindNavBarButtons
};
