'use strict';

let rules = require('./rules/createRule');
let boat = require('./boat/camera');

let bindNavBarButtons = function() {
  $('#home [data-role="rules"]').on('click', function() {
    rules.createTable();
  });
  $('#boat [data-role="camera"]').on('click', function() {
    boat.renderCamera();
  });
};

module.exports = {
  bindNavBarButtons
};
