import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { stdin } from 'process';
import { fileURLToPath } from 'url';

const write = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const writeFilePath = join(__dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(writeFilePath, 'utf-8');
  stdin.on('data', (data) => {
    writeStream.write(data);
    process.exit();
  });
};

await write();
