'use strict';


/**
 *
 * days Integer 
 * returns ForecastResponse
 **/
exports.getForecast = function(days) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "city" : {
    "country" : "country",
    "name" : "name",
    "lon" : 1.4658129805029452,
    "id" : 0,
    "lat" : 6.027456183070403
  },
  "values" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "temperature" : {
      "high" : 3.616076749251911,
      "low" : 9.301444243932576,
      "night" : 1.2315135367772556,
      "evening" : 7.386281948385884,
      "day" : 4.145608029883936,
      "morning" : 2.027123023002322
    },
    "weather" : {
      "summary" : "summary",
      "icon" : "icon",
      "description" : "description"
    },
    "humidity" : 5,
    "pressure" : 5.962133916683182,
    "clouds" : 7,
    "windSpeed" : 2.3021358869347655
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "temperature" : {
      "high" : 3.616076749251911,
      "low" : 9.301444243932576,
      "night" : 1.2315135367772556,
      "evening" : 7.386281948385884,
      "day" : 4.145608029883936,
      "morning" : 2.027123023002322
    },
    "weather" : {
      "summary" : "summary",
      "icon" : "icon",
      "description" : "description"
    },
    "humidity" : 5,
    "pressure" : 5.962133916683182,
    "clouds" : 7,
    "windSpeed" : 2.3021358869347655
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets the state of the heater
 *
 * zoneId String 
 * returns HeaterState
 **/
exports.getHeaterState = function(zoneId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "state" : "state"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * zoneId String 
 * returns TemperatueZoneStatus
 **/
exports.getZoneTemperature = function(zoneId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id",
  "units" : "fahrenheit",
  "value" : 5.962133916683182,
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * turns the heater on or off
 *
 * zoneId String 
 * state String 
 * returns ApiResponse
 **/
exports.setHeaterState = function(zoneId,state) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "message" : "everything is ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns TemperatureSummary
 **/
exports.temperatureSummary = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneStatus" : [ {
    "name" : "name",
    "id" : "id",
    "units" : "fahrenheit",
    "value" : 5.962133916683182,
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "name" : "name",
    "id" : "id",
    "units" : "fahrenheit",
    "value" : 5.962133916683182,
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "zones" : [ {
    "inputPosition" : 6,
    "outputPosition" : 1,
    "zone" : "zone",
    "name" : "name",
    "id" : 0
  }, {
    "inputPosition" : 6,
    "outputPosition" : 1,
    "zone" : "zone",
    "name" : "name",
    "id" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

