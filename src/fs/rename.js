import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const wrongFilePath = join(__dirname, 'files', 'wrongFilename.txt');
  const properFilePath = join(__dirname, 'files', 'properFilename.md');
  fs.open(properFilePath, (err) => {
    if (!err) throw Error('FS operation failed');
    else {
      fs.rename(wrongFilePath, properFilePath, (err) => {
        if (err) {
          if (err.code === 'ENOENT') throw Error('FS operation failed');
          else console.log(err.message);
        }
      });
    }
  });
};

await rename();
