'use strict';

var utils = require('../utils/writer.js');
var Environment = require('../service/EnvironmentService');

module.exports.getForecast = function getForecast (req, res, next, days) {
  Environment.getForecast(days)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHeaterState = function getHeaterState (req, res, next, zoneId) {
  Environment.getHeaterState(zoneId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getZoneTemperature = function getZoneTemperature (req, res, next, zoneId) {
  Environment.getZoneTemperature(zoneId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setHeaterState = function setHeaterState (req, res, next, zoneId, state) {
  Environment.setHeaterState(zoneId, state)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.temperatureSummary = function temperatureSummary (req, res, next) {
  Environment.temperatureSummary()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
