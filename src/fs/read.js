import fs from 'fs';

const read = async () => {
  fs.readFile('./files/fileToRead.txt', (err, data) => {
    if (err) throw Error('FS operation failed');
    else console.log(data.toString());
  });
};

await read();
