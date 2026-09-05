const FAHRENHEIT_FREEZING_POINT = 32;

const convertToCelsius = function(temp) {
   	  return Math.round(((temp - FAHRENHEIT_FREEZING_POINT) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  return Math.round(((9 / 5  * temp) + FAHRENHEIT_FREEZING_POINT )* 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
