'use strict';

let cameraTemplate = require('../../handlebars/boat/camera.handlebars');

let renderCamera = function() {
  $('#page-wrapper').empty();
  $('#page-wrapper').append(cameraTemplate());
  console.log('Trying to render Camera');
};

module.exports = {
  renderCamera,
};
