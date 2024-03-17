import 'colors';
import inquirer from 'inquirer';
import figlet from 'figlet';

const Menu = async () => {
  console.clear();
  console.log(figlet.textSync('Weather App', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  }));

  console.log('===================='.green);
  console.log('Select an option'.white);
  console.log('===================='.green);

  const { option } = await inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What do you want to do?',
      choices: [
        {
          value: 1,
          name: `${'1.'.green} Search city`
        },
        {
          value: 2,
          name: `${'2.'.green} History`
        },
        {
          value: 0,
          name: `${'0.'.green} Exit`
        }
      ]
    }
  ]);
  return option;
}

const Pause = async () => {
  console.log('\n');
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'ENTER'.green} to continue`
    }
  ])
}

const ReadInput = async (message) => {
  const { desc } = await inquirer.prompt([
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please enter a value';
        }
        return true;
      }
    }
  ]);
  return desc;
}

const ListPleaces = async (pleaces = []) => {
  const choices = pleaces.map((place, index) => {
    const idx = `${index + 1}`.green;
    return { value: place.id, name: `${idx} ${place.name}` }
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancel'
  });

  const { id } = await inquirer.prompt([
    {
      type: 'list',
      name: 'id',
      message: 'Select place',
      choices
    }
  ]);

  return id;
}

const Confirm = async (message) => {
  const { ok } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]);
  return ok;
}

const ShowCheckList = async (tasks = []) => {
  const choices = tasks.map((task, index) => {
    const idx = `${index + 1}`.green;
    return {
      value: task.id,
      name: `${idx} ${task.desc}`,
      checked: (task.completedAt) ? true : false
    }
  })

  const { ids } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Select',
      choices
    }
  ]);

  return ids;
}

export {
  Menu,
  Pause,
  ReadInput,
  ListPleaces,
  Confirm,
  ShowCheckList
}
