'use strict';

let dashTemplate = require('../../handlebars/dashboard.handlebars');
let sideNavTemplate = require('../../handlebars/sideNav.handlebars');
let env = require('../../env');

let mqtt = require('mqtt');
let client = mqtt.connect( env.ws , {
  protocolId: 'MQIsdp',
  protocolVersion: 3
});

let displayFeedsOnDashboard = function () {
  client.on('connect', function () {
    client.subscribe('/home/#');
  });

  client.on('message', function(topic, message) {
    if (topic === '/home/coalshed/boiler/temperature/inletpipe') {
      let temp = parseFloat(message.toString().replace(' ', '')).toFixed(2);
      bindBoilerUpdate($('.coalshedboiler .inletpipe'), temp);

    } else if (topic === '/home/coalshed/boiler/temperature/outletpipe') {
      let temp = parseFloat(message.toString().replace(' ', '')).toFixed(2);
      bindBoilerUpdate($('.coalshedboiler .outletpipe'), temp);

    } else if (topic === '/home/coalshed/boiler/temperature/waterjacket') {
      let temp = parseFloat(message.toString().replace(' ', '')).toFixed(2);
      bindBoilerUpdate($('.coalshedboiler .waterjacket'), temp);

    } else if (topic === '/home/basement/boiler/temperature/inletpipe') {
      let temp = parseFloat(message.toString().replace(' ', '')).toFixed(2);
      bindBoilerUpdate($('.basementboiler .inletpipe'), temp);

    } else if (topic === '/home/basement/boiler/temperature/outletpipe') {
      let temp = parseFloat(message.toString().replace(' ', '')).toFixed(2);
      bindBoilerUpdate($('.basementboiler .outletpipe'), temp);

    } else if (topic === '/home/livingroom/thermostat/temperature/livingroom') {
      let temp = parseFloat(message.toString().replace(' ', '')).toFixed(2);
      bindThermostatUpdate($('.livingroom .upstairs'), temp);

    } else if (topic === '/home/livingroom/thermostat/humidity/livingroom') {
      let temp = parseFloat(message.toString().replace(' ', '')).toFixed(2);
      bindHumidistatUpdate($('.livingroom .humidity'), temp);

    } else if (topic === '/home/basement/thermostat/temperature/basement') {
      let temp = parseFloat(message.toString().replace(' ', '')).toFixed(2);
      bindThermostatUpdate($('.basement .air'), temp);

    } else if (topic === '/home/basement/thermostat/humidity/basement') {
      let temp = parseFloat(message.toString().replace(' ', '')).toFixed(2);
      bindHumidistatUpdate($('.basement .humidity'), temp);
    }
  });
};

let bindBoilerUpdate = function (location, messageTemperature) {
  if (messageTemperature < 100) {
    $(location).removeClass('panel-primary').addClass('panel-info');
  } else if (messageTemperature > 100 && messageTemperature < 140) {
    $(location).removeClass('panel-info panel-green').addClass('panel-primary');
  }else if (messageTemperature > 140 && messageTemperature < 158) {
    $(location).removeClass('panel-primary panel-yellow').addClass('panel-green');
  } else if (messageTemperature < 176 && messageTemperature > 158) {
    $(location).removeClass('panel-green panel-red').addClass('panel-yellow');
  } else if (messageTemperature > 176) {
    $(location).removeClass('panel-yellow').addClass('panel-red');
  }
  $(location).find('.huge').empty().append(messageTemperature + '&deg;F');
};

let bindThermostatUpdate = function (location, messageTemperature) {
  if (messageTemperature <= 50) {
    $(location).removeClass('panel-primary').addClass('panel-info');
  } else if (messageTemperature > 50 && messageTemperature < 60) {
    $(location).removeClass('panel-info panel-green').addClass('panel-primary');
  }else if (messageTemperature >= 60 && messageTemperature < 77) {
    $(location).removeClass('panel-primary panel-yellow').addClass('panel-green');
  } else if (messageTemperature >= 77 && messageTemperature < 85) {
    $(location).removeClass('panel-green panel-red').addClass('panel-yellow');
  } else if (messageTemperature >= 85) {
    $(location).removeClass('panel-yellow').addClass('panel-red');
  }
  $(location).find('.huge').empty().append(messageTemperature + '&deg;F');
};

let bindHumidistatUpdate = function (location, messageHumidity) {
  if (messageHumidity < 20) {
    $(location).removeClass('panel-primary').addClass('panel-red');
  } else if (messageHumidity > 20 && messageHumidity < 30) {
    $(location).removeClass('panel-primary panel-red').addClass('panel-yellow');
  }else if (messageHumidity >= 30 && messageHumidity < 50) {
    $(location).removeClass('panel-primary panel-yellow').addClass('panel-green');
  } else if (messageHumidity >= 50 && messageHumidity < 60) {
    $(location).removeClass('panel-primary panel-green panel-red').addClass('panel-yellow');
  } else if (messageHumidity >= 60) {
    $(location).removeClass('panel-primary panel-green panel-red panel-yellow').addClass('panel-red');
  }
  $(location).find('.huge').empty().append(messageHumidity + '%');
};

let renderDashboard = function () {
  $('#page-wrapper').empty();
  $('#page-wrapper').append(dashTemplate());
  displayFeedsOnDashboard();
};

module.exports = {
  renderDashboard
};
