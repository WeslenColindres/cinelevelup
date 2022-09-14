'use strict';

var utils = require('../utils/writer.js');
var Device = require('../service/DeviceService');

module.exports.getDevices = function getDevices (req, res, next, skip, limit) {
  Device.getDevices(skip, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.register = function register (req, res, next, body) {
  Device.register(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
