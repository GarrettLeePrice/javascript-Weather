var apiKey = require('./../.env').apiKey;

var getConvertTemp = function(kelvin) {
  return Math.round(kelvin * (9/5) -459.67);
};

var getConvertKelvinCelsius = function(kelvin) {
  return Math.round(kelvin -273.15);
};

function GetWeather(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    this.weatherData = response;
    console.log(this.weatherData);
    }).fail(function(error) {
    $('#displayHumidity').text(error.responseJSON.message);
  });
}

function Weather() {
}

Weather.prototype.getWeatherData = function (city) {
  var weatherData = [];
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    weatherData = response;
    console.log(weatherData);
    return weatherData;
    }).fail(function(error) {
    $('#displayHumidity').text(error.responseJSON.message);
  });
};

Weather.prototype.getHumidity = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('#displayHumidity').text(error.responseJSON.message);
  });
};

Weather.prototype.getTemperature = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    var currTemp = getConvertTemp(response.main.temp);
    displayFunction(city, currTemp);
  }).fail(function(error) {
    $('#displayTemp').text(error.responseJSON.message);
  });
};

Weather.prototype.getTemperatureCelsius = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, getConvertKelvinCelsius(response.main.temp));
  }).fail(function(error) {
    $('#displayTemp').text(error.responseJSON.message);
  });
};


exports.weatherModule = Weather;
exports.getWeatherModule = Weather;
