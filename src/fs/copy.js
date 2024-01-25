import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const originalDirPath = path.join(__dirname, 'files');
  const copyDirPath = path.join(__dirname, 'files_copy');
  fs.open(copyDirPath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.cp(originalDirPath, copyDirPath, { recursive: true }, (err) => {
          if (err) {
            if (err.code === 'ENOENT') throw Error('FS operation failed');
            else {
              console.log(err.message);
            }
          }
        });
      } else console.log(err.message);
    } else throw Error('FS operation failed');
  });
};

await copy();
