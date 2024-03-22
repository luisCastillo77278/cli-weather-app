import axios from "axios";

export const Api = axios.create({
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
