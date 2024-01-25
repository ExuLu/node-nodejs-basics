import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToRead.txt');
  fs.readFile(filePath, (err, data) => {
    if (err) throw Error('FS operation failed');
    else console.log(data.toString());
  });
};

await read();
