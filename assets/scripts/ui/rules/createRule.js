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
    bindTableRowButtons();
  })
  .catch(console.err);
};

let bindTableRowButtons = function () {
  $('tbody tr').each(function () {
    let taskId = this.dataset.taskId;// The DOM Way
    let editButton = $(this).children('td').children('span').children('.btn-info');
    let deleteButton = $(this).children('td').children('span').children('.btn-warning');
    bindEditButton(taskId, editButton);
    bindDeleteButton(taskId, deleteButton);
  });
};

let bindEditButton = function (taskId, editButton) {
  editButton.on('click', function () {
    api.getOneRule(taskId)
    .then((data) => {
      $('#page-wrapper').empty();
      $('#page-wrapper').append(newRuleTemplate(data));
      $('button[name="updateRule"]').on('click', function () {
        updateRule(taskId);
      });
    })
    .catch(console.error)
  });
};

let bindDeleteButton = function (taskId, deleteButton) {
  deleteButton.on('click', function () {
    api.deleteRule(taskId)
    .then(function () {
      createTable();
    })
    .catch(console.error);
  });
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

let updateRule = function (taskId) {
  let item = new FormData(document.querySelector('form[role="updateRule"]'));
  api.updateRule(taskId, item)
  .then(function () {
    createTable();
  })
  .catch(console.error);
};

module.exports = {
  createTable,
};
