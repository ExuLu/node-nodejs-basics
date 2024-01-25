import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = join(__dirname, 'files');
  fs.readdir(folderPath, (err, files) => {
    if (err) throw Error('FS operation failed');
    else files.forEach((file) => console.log(file));
  });
};

await list();
