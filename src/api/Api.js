import GetLat from '../api/lat';
export default async function GetCurrentWeather() {
var a = await GetLat();
var lats = a[0];
var lons = a[1];

  const axios = require("axios");
  const retry = require('retry-axios');

  var result = [];

  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lats}&lon=${lons}&appid=340d8a5f713a969d32d8834f430f1705`
      //`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=340d8a5f713a969d32d8834f430f1705`
    )
    .then((response) => {
      console.log(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lats}&lon=${lons}&appid=340d8a5f713a969d32d8834f430f1705`
        //`http://api.openweatherwap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=340d8a5f713a969d32d8834f430f1705`
      );
      //console.log(response);
      const data = response.data;
      //const locationName = data.name + ", " + data.sys.country;
      const locationName = data.name;
      const currentTemperature = data.main.temp;
      const visibility = data.visibility;
      const wind = data.wind.speed;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const cloud = data.clouds.all;
      const precipitation = data.main.temp - 290;
      const p = ~~precipitation;
      const weather = data.weather[0].main
      result = [
        locationName,
        currentTemperature,
        visibility,
        wind,
        humidity,
        pressure,
        cloud,
        p,
        weather
      ];
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
