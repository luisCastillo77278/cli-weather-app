import { searchMapbox } from "../services/search_mapbox.services.js";
import { weatherPlace } from "../services/weather.service.js";
import { FileStorageService } from "../utilities/fileStorage.js";

class Search {
  historis = [];

  constructor() {
    FileStorageService.fileName = 'db'
    this.initDB().then();
  }

  get Historis() {
    return this.historis.map(item => {
      const words = item.split(' ');
      return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    })
  }

  async initDB() {
    try {
      this.historis = await FileStorageService.readData();
    } catch (err) {
      throw err;
    }
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

  async saveHistoryCity(city) {
    try {
      if (this.historis.includes(city.toLowerCase())) return;
      this.historis = this.historis.slice(0, 5);
      this.historis.unshift(city.toLowerCase());
      await FileStorageService.saveData(this.historis);
    } catch (err) {
      throw err;
    }
  }
}

export default Search;
