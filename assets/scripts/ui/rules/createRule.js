'use strict';

const apiRules = require('../../api-req/rules');

let rulesTableTemplate = require('../../handlebars/rules/table.handlebars');
let rulesFormTemplate = require('../../handlebars/rules/form.handlebars');
// Rules table functions
let table = function () {
  apiRules.index(function (data) {
    $('.table').append(rulesTableTemplate(data));
  })
  .then(() => ruleForm())
  .then(() => createRule());
};

// Form functions
let ruleForm = function () {
  $('button[name="addRule"]').on('click', function () {
    console.log('this is the new rule');
    $('#page-wrapper').empty();
    $('#page-wrapper').append(rulesFormTemplate());
    createRule();
  });
};

let createRule = function () {
  $('button[name="createRule"]').on('click', function () {
    let item = new FormData(document.querySelector('form[role="newRule"]'));
    apiRules.create(item, function () {
      $('#page-wrapper').empty();
      $('#page-wrapper').append(rulesFormTemplate());
      // Reassign click handler to create a rule button
      createRule();
      console.log('Sucessfull Creation of rules');
    }, function (data) {
      console.log('Issue: (Rules) Validation on Creation of a Rule #1 ');
      console.error(data);
    });
  });
};

module.exports = {
  table,
};
