import { Menu, Pause, ReadInput, ListPleaces } from "./helpers/inquirer.js";
import Search from "./models/Search.js";

const main = async () => {
  const search = new Search();
  let option;
  do {
    option = await Menu();

    switch (option) {
      case 1:
        // mostrar mensaje para que la persona escriba
        const pleace = await ReadInput("City: ");
        // buscar la ciudad que la persona escriba
        const pleaces = await search.City(pleace);
        // seleccionar los lugares
        const id = await ListPleaces(pleaces);
        console.log({ id });

        const city = pleaces.find((item) => {
          return item.id === id;
        });
        console.log("\nInformation of the city".green);
        // obtener los datos del clima del lugar
        // mostrar resultados
        console.log(`Ciudad: `, city.name);
        console.log(`Lat: `, city.lat);
        console.log(`Lng: `, city.lng);
        break;
    }

    if (option !== 0) await Pause();
  } while (option !== 0);
};

main();
