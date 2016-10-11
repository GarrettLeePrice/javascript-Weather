var Weather = require('./../js/weather.js').weatherModule;



$(document).ready(function() {
  var currentWeatherObject = new Weather();
  var displayHumidity = function(city, humidityData) {
    $('#displayHumidity').text("The humidity in " + city + " is " + humidityData + "%");
  }
  var displayTemperature = function(city, temperatureData) {
    $('#displayTemp').text("The temperature in " + city + " is " + currentWeatherObject.getConvertTemp(temperatureData) + "degrees");
  }
  $('#getHumidity').click(function() {
    var city = $('#cityName').val();
    $('#location').val("");
    currentWeatherObject.getHumidity(city, displayHumidity);
  });
  $('#getTemp').click(function() {
    var city = $('#cityName').val();
    $('#location').val("");
    currentWeatherObject.getTemperature(city, displayTemperature);
  });
});
