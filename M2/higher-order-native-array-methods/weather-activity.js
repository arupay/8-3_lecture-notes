const weatherData = require("./weather-data.js");

/**
 * Use built in higher order array methods to answer questions about the seven day weather forecast
 */

/**
 * 1. Find all the days that will get warmer than 50 degrees.
 *
 * @param {Object[]} forecast
 * @returns {Object[]} - filtered list containing warm days
 */
function daysWarmerThan50(forecast) {
  return forecast.filter((day) => day.highTemp > 50);
}
// console.log(daysWarmerThan50(weatherData));

/**
 * 2. Get a list of the highs and lows for each day.
 *
 * @param {Object[]} forecast
 * @returns {Number[][]} - An array of arrays of numbers
 *
 * Example:
 *
 * tempRanges(weatherData) // => [[38, 50], [33, 41], [34, 49], [44, 52], [28, 49], [34, 41], [44, 56]]
 */
function tempRanges(forecast) {
  return forecast.map((day) => [day.lowTemp, day.highTemp]);
}
// console.log(tempRanges(weatherData));
/**
 * 3. Print out a weather summary for every day in the seven day forecast.
 *
 * @param {Object[]} forecast
 * @returns {Undefined}
 *
 * Example:
 *
 * logWeatherSummary(weatherData)
 * // => "Today there is a high of 50 with a 1% chance of rain"
 * // => ...
 * // => "Today there is a high of 56 with a 2% chance of rain"
 */
function logWeatherSummary(forecast) {
  return forecast.map(
    (day) =>
      `Today there is a high of ${day.highTemp} with a ${
        day.precipitation.chance * 100
      }% chance of rain.`
  );
}

// console.log(logWeatherSummary(weatherData));

/**
 * 4. Find the first day this week that it might snow
 */
function findSnowDay(forecast) {
  return forecast.find((day) => day.precipitation.type.includes("snow"));
}

console.log(findSnowDay(weatherData));

/**
 * 5. Get a list of days of the week that the wind will be above 15 mph.
 *
 * @param {Object[]} forecast
 * @returns {String[]} - an array of days of the week with high wind
 *
 * Example:
 *
 * highWindDays(weatherData) // => ["Tuesday", "Saturday", "Sunday"]
 */
function highWindDays(forecast) {
  let isWindy = (day) => day.wind.speed < 15;

  let getDayOfWeek = (day) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dayNum = new Date(day.date).getDay();
    return days[dayNum];
  };
  return forecast.filter(isWindy).map(getDayOfWeek);
}

console.log(highWindDays(weatherData));

/**
 * 6. Print out the low temp for days with less than a 5% chance of precipitation.
 *
 * @param {Object[]} forecast
 * @returns {Undefined}
 *
 * Example:
 *
 * logSunnyDayLows(weatherData)
 * // => "3/8/2022 has a low of 38"
 * // => "3/13/2022 has a low of 34"
 * // => "3/14/2022 has a low of 44"
 */
function logSunnyDayLows(forecast) {
  const lessThan5Percent = (day) => day.precipitation.chance < 0.05;
  const strDateAndLowTemp = (day) => `${day.date} has a low of ${day.lowTemp}`;

  return forecast.filter(lessThan5Percent).map(strDateAndLowTemp);
}

console.log(logSunnyDayLows(weatherData));

/**
 * 7. Given the current temparature, find the first day of the week it could plausibly be
 *
 * @param {Object[]} forecast
 * @param {Number} temperature
 * @returns {String || Null} - the earliest date it could plausibly be
 *
 * Example:
 *
 * findDayByTemp(weatherData, 51) // => "3/11/2022"
 */
function findDayByTemp(forecast, temperature) {
  // find the first weather data object with the given temperature
  // GREAT use case for the array.find()!!
  const firstWeatherObj = forecast.find((element) => {
    return temperature >= element.lowTemp && temperature <= element.highTemp;
  }); // temperature is between high and low
  // get the elements date
  const firstWeatherDate = firstWeatherObj.date;
  // convert it to a Date object
  const firstWeatherDay = new Date(firstWeatherDate);
  const firstWeatherDayIndex = firstWeatherDay.getDay();

  console.log(firstWeatherDate);
  console.log(firstWeatherDay);
  console.log(firstWeatherDayIndex);
  // using the Date object, calculate the day of the week
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekDays[firstWeatherDayIndex];
}

console.log(findDayByTemp(weatherData, 34));
