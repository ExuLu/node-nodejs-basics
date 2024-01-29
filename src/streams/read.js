import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const readFilePath = join(__dirname, 'files', 'fileToRead.txt');
  const stream = createReadStream(readFilePath, 'utf-8');
  let data = '';
  stream.on('data', (chunk) => (data += chunk));
  stream.on('end', () => stdout.write(data));
};

await read();
