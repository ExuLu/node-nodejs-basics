import fs from 'fs';
import path from 'path';

const create = async () => {
  try {
    fs.open('./files/fresh.txt', (err) => {
      if (err) {
        if (err.code === 'ENOENT') {
          fs.writeFile('./files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) console.log(err.message);
          });
        } else console.log(err.message);
      } else throw Error('FS operation failed');
    });
  } catch (err) {
    console.log(err);
  }
};

await create();
