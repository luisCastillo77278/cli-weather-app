import axios from "axios";

const ApiMapBox = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    access_token: process.env.MAPBOX_TOKEN,
    limit: 5,
    language: "es",
    proximity: "ip",
  },
});

const ApiWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: process.env.WEATHER_TOKEN,
    units: 'metric'
  },
});

export {
  ApiMapBox,
  ApiWeather
}
