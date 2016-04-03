'use strict';

let rulesTemplate = require('../handlebars/rules.handlebars');

let start = function() {
  $('li[data-role="rules"]').on('click', function() {
    console.log('rules clicked');
    $('#page-wrapper').empty();
    $('#page-wrapper').append(rulesTemplate());
    //history.pushState('stateObj', "rules", "rules");
  });
};

module.exports = {
  start
};
