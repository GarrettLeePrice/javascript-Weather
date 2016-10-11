var apiKey = require('./../.env').apiKey;


function Weather() {

}

Weather.prototype.getHumidity = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('#displayHumidity').text(error.responseJSON.message);
  });
}

Weather.prototype.getTemperature = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp);
  }).fail(function(error) {
    $('#displayTemp').text(error.responseJSON.message);
  });
}

Weather.prototype.getConvertTemp = function(kelvin) {
  return kelvin*(9/5) -459.67;
}

exports.weatherModule = Weather;
