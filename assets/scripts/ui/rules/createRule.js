'use strict';

const api = require('../../api-req/rules');

let rulesTemplate = require('../../handlebars/rules.handlebars');
let rulesTableTemplate = require('../../handlebars/rules/table.handlebars');
let newRuleTemplate = require('../../handlebars/rules/form.handlebars');

// Rules table functions
let createTable = function () {
  $('#page-wrapper').empty();
  $('#page-wrapper').append(rulesTemplate());
  api.getAllRules()
  .then(function (data) {
    $('.table').append(rulesTableTemplate(data));
    $('button[name="addRule"]').on('click', function () {
      $('#page-wrapper').empty();
      $('#page-wrapper').append(newRuleTemplate());
      $('button[name="createRule"]').on('click', createRule);
    });
  })
  .catch(console.err);
};

let createRule = function () {
  let item = new FormData(document.querySelector('form[role="newRule"]'));
  api.createRule(item)
  .then(function () {
    createTable();
  })
  .catch(function (data) {
    console.log('Issue: (Rules) Validation on Creation of a Rule #1 ');
    console.error(data);
  });
};

module.exports = {
  createTable,
};
