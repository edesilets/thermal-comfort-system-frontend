'use strict';

const apiRules = require('../api-req/rules');
let rulesTemplate = require('../handlebars/rules.handlebars');
let rulesTableTemplate = require('../handlebars/rules/table.handlebars');

let ruleTable = function (data) {
  $('.table').append(rulesTableTemplate(data));
};

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
    apiRules.index(ruleTable);
  })
    //history.pushState('stateObj', "rules", "rules");
  .catch(console.log);
  });
};

module.exports = {
  start
};
