import { ApiWeather } from "../utilities/api.js";

const weatherPlace = async ({ lat, lng }) => {
  try {
    const resp = await ApiWeather.get(`/weather?lat=${lat}&lon=${lng}`);
    return resp.data;
  } catch (err) {
    throw err;
  }
}

export {
  weatherPlace
}
