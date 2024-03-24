import { searchMapbox } from "../services/search_mapbox.services.js";
import { weatherPlace } from "../services/weather.service.js";

class Search {
  historis = [];

  constructor() {
    // TODO: leer de la db json
  }

  async City(place = "") {
    try {
      const resp = await searchMapbox(place);
      return resp.features.map((city) => ({
        id: city.id,
        name: city.place_name,
        lng: city.center[0],
        lat: city.center[1],
      }));
    } catch (err) {
      return null;
    }
  }

  async weatherCity(lat, lng) {
    try {
      const { weather, main } = await weatherPlace({ lat, lng });
      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp
      };
    } catch (err) {
      throw err;
    }
  }
}

export default Search;
