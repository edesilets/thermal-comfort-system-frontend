'use strict';

let rules = require('./rules/createRule');
let boat = require('./boat/camera');
let dashboard = require('./dashboard/feeds');
let demo = require('./demo/dashboard');

let bindNavBarButtons = function() {
  $('#home [data-role="dashboard"]').on('click', function() {
    dashboard.renderDashboard();
  });
  $('#home [data-role="rules"]').on('click', function() {
    rules.createTable();
  });
  $('#home [data-role="demo"]').on('click', function() {
    demo.renderDashboard();
  });
  $('#boat [data-role="camera"]').on('click', function() {
    boat.renderCamera();
  });
};

module.exports = {
  bindNavBarButtons
};
