import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const newFilePath = join(__dirname, 'files', 'fresh.txt');
  fs.open(newFilePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.writeFile(newFilePath, 'I am fresh and young', (err) => {
          if (err) console.log(err.message);
        });
      } else console.log(err.message);
    } else throw Error('FS operation failed');
  });
};

await create();
