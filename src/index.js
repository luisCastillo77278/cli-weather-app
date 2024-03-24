import { Menu, Pause, ReadInput, ListPleaces } from "./utilities/inquirer.js";
import Search from "./models/Search.js";

const main = async () => {
  const search = new Search();
  let option;
  do {
    option = await Menu();

    switch (option) {
      case 1:
        const pleace = await ReadInput("City: ");

        const pleaces = await search.City(pleace);

        const id = await ListPleaces(pleaces);

        if (id === '0') continue;

        const city = pleaces.find((item) =>
          item.id === id
        );

        await search.saveHistoryCity(city.name);

        const weather = await search.weatherCity(city.lat, city.lng);

        console.log("\nInformation of the city".green);
        console.log(`City: `, city.name);
        console.log(`Lat: `, city.lat);
        console.log(`Lng: `, city.lng);
        console.log('Temp: ', weather.temp)
        console.log('Temp min: ', weather.min);
        console.log('Temp max: ', weather.max);
        console.log('Description: ', weather.desc);
        break;

      case 2:
        search.Historis.forEach((city, i) => {
          console.log(`${i + 1} ${city}`);
        })
        break

      case 0:
        console.log("Good bye....".red);
        break;
    }

    if (option !== 0) await Pause();
  } while (option !== 0);
};

main();
