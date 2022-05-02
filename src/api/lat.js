export default async function GetLat() {
  const a = require('../pages/home');
    const axios = require("axios");
    const retry = require('retry-axios');
    const value = a[0].text;
    //const value = "austin";


    var r = [];
  
    await axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=340d8a5f713a969d32d8834f430f1705`
        //`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=340d8a5f713a969d32d8834f430f1705`
      )
      .then((response) => {
        console.log(
            `https://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=340d8a5f713a969d32d8834f430f1705`
          //`http://api.openweatherwap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=340d8a5f713a969d32d8834f430f1705`
        );
        //console.log(response);
        const data = response.data;
        //const locationName = data.name + ", " + data.sys.country;
        const lat = data[0].lat;
        const lon = data[0].lon;
        //setLat(lat);
        //setLon(lon);

        r = [lat,lon];
        console.log(r);
      })
      .catch((error) => {
        console.log(error);
      });
  
    return r;
  }
  