'use strict';

var utils = require('../utils/writer.js');
var Zones = require('../service/ZonesService');

module.exports.getZones = function getZones (req, res, next) {
  Zones.getZones()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.quietZone = function quietZone (req, res, next, zoneId) {
  Zones.quietZone(zoneId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
