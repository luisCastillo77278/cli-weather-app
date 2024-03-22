import { searchMapbox } from "../services/search_mapbox.services.js";

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
}

export default Search;
