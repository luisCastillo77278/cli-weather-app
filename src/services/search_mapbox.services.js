import { ApiMapBox } from "../utilities/api.js";

const searchMapbox = async (place) => {
  try {
    const { data } = await ApiMapBox.get(`mapbox.places/${place}.json`);
    return data;
  } catch (error) {
    throw error;
  }
};

export { searchMapbox };
