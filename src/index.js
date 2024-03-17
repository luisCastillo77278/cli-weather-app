import { Menu, Pause, ReadInput } from './helpers/inquirer.js'
import Search from './models/Search.js';

const main = async () => {
  const search = new Search();
  let option;
  do {
    option = await Menu();

    switch (option) {
      case 1:
        // mostrar mensaje para que la persona escriba
        const pleace = await ReadInput('City: ');
        console.log({ pleace })
        // buscar la ciudad que la persona escriba
        search.City(pleace);
        console.log('\nInformation of the city'.green);
        // seleccionar los lugares
        // obtener los datos del clima del lugar
        // mostrar resultados
        break;
    }

    if (option !== 0) await Pause()
  } while (option !== 0);
}


main();
