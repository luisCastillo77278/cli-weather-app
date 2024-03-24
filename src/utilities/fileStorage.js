import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'node:path';


const __dirname = dirname(fileURLToPath(import.meta.url));

class FileStorage {
  _fileName = '';

  set fileName(file = '') {
    this._fileName = file;
  }

  async readData() {
    try {
      const resp = await fs.readFile(join(__dirname, `../data/${this._fileName}.json`), { encoding: 'utf8' });
      if (!resp) return [];
      return JSON.parse(resp);
    } catch (error) {
      throw new Error(`Error read file data ${error.message}`)
    }
  }

  async saveData(data) {
    try {
      await fs.writeFile(
        join(__dirname, `../data/${this._fileName}.json`),
        JSON.stringify(data, null, 2)
      )
    }
    catch (error) {
      throw new Error(`Error write file data ${error.message}`);
    }
  }

}


export const FileStorageService = new FileStorage();
