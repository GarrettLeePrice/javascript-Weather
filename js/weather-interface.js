var Weather = require('./../js/weather.js').weatherModule;
var GetWeather = require('./../js/weather.js').getWeatherModule;



$(document).ready(function() {
  var currentWeatherObject = new Weather();

  var displayHumidity = function(city, humidityData) {
    $('#displayHumidity').text("The humidity in " + city + " is " + humidityData + "%");
  };

  var displayTemperature = function(city, temperatureData) {
    $('#displayTemp').text("The temperature in " + city + " is " + temperatureData + " degrees");
  };

  $('#getHumidity').click(function() {
    var city = $('#cityName').val();
    $('#location').val("");
    currentWeatherObject.getHumidity(city, displayHumidity);
  });

  $('#getTemp').click(function() {
    var city = $('#cityName').val();
    $('#location').val("");
    currentWeatherObject.getTemperature(city, displayTemperature);
    var gotWeather = new GetWeather(city);
  });

  $('#getCelsius').click(function() {
    var city = $('#cityName').val();
    $('#location').val("");
    currentWeatherObject.getTemperatureCelsius(city, displayTemperature);
  });
});
