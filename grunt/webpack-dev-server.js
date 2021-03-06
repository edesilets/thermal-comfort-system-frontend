'use strict';

let clone = require('clone');
// clone the webpack config to separate configuration of webpack and dev server
let webpackConfig = clone(require('./webpack').options);

// enable live reload without a script tag
webpackConfig.entry.vendor.unshift('webpack-dev-server/client?http://homestatus.ddns.net:3000');

module.exports = {
  options: {
    webpack: webpackConfig
  },

  start: {
    keepAlive: true,
    webpack: {
      devtool: 'source-map',
      debug: 'true'
    }
  }
};
