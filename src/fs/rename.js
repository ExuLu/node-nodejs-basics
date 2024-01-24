import fs from 'fs';

const rename = async () => {
  fs.open('./files/properFilename.md', (err) => {
    if (!err) throw Error('FS operation failed');
    else {
      fs.rename(
        './files/wrongFilename.txt',
        './files/properFilename.md',
        (err) => {
          if (err) {
            if (err.code === 'ENOENT') throw Error('FS operation failed');
            else console.log(err.message);
          }
        }
      );
    }
  });
};

await rename();
