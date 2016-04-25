'use strict';

let cameraTemplate = require('../../handlebars/boat/camera.handlebars');

let renderCamera = function() {
  $('#page-wrapper').empty();
  $('#page-wrapper').append(cameraTemplate());
};

module.exports = {
  renderCamera,
};
