import fs from 'fs';

const copy = async () => {
  fs.open('./files_copy', (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.cp('./files', './files_copy', { recursive: true }, (err) => {
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
