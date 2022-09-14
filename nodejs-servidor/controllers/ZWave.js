'use strict';

var utils = require('../utils/writer.js');
var ZWave = require('../service/ZWaveService');

module.exports.getLightingSummary = function getLightingSummary (req, res, next) {
  ZWave.getLightingSummary()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSwitchState = function getSwitchState (req, res, next, deviceId) {
  ZWave.getSwitchState(deviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setDimmer = function setDimmer (req, res, next, deviceId, value) {
  ZWave.setDimmer(deviceId, value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setDimmerTimer = function setDimmerTimer (req, res, next, deviceId, value, timeunit, units) {
  ZWave.setDimmerTimer(deviceId, value, timeunit, units)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setSwitch = function setSwitch (req, res, next, deviceId, value) {
  ZWave.setSwitch(deviceId, value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setSwitchTimer = function setSwitchTimer (req, res, next, deviceId, value, minutes) {
  ZWave.setSwitchTimer(deviceId, value, minutes)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
