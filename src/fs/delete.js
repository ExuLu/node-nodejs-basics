import fs from 'fs';

const remove = async () => {
  fs.unlink('./files/fileToRemove.txt', (err) => {
    if (err) {
      if (err.code === 'ENOENT') throw Error('FS operation failed');
      else console.log(err.message);
    }
  });
};

await remove();
