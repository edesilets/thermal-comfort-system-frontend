'use Strict';

let demoTemplate = require('../../handlebars/demo/homedemo.handlebars');
let env = require('../../env');
let mqtt = require('mqtt');

let client = mqtt.connect( env.ws , {
  protocolId: 'MQIsdp',
  protocolVersion: 3
});

let renderDashboard = function () {
  $('#page-wrapper').empty();
  $('#page-wrapper').append(demoTemplate());

  $('.btn').each(function () {
    let count = 1;
    $(this).on('click', function () {
      let state = false;
      count++;
      if (count % 2) {
        $(this).removeClass('btn-primary btn-success').addClass('btn-danger');
        state = '1';
      } else {
        $(this).removeClass('btn-primary btn-danger').addClass('btn-success');
        state = '0';
      }
      let pin = $(this).data('id');
      let message = pin+state;
      client.publish('/control/', message);
    });
  });
};

module.exports = {
  renderDashboard
};
