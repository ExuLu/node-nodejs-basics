import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToRemove.txt');
  fs.unlink(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') throw Error('FS operation failed');
      else console.log(err.message);
    }
  });
};

await remove();
