import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';

const decompress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = join(__dirname, 'files', 'archive.gz');
  const readStream = createReadStream(zipPath);
  const writeStream = createWriteStream(filePath, 'utf-8');
  const unzip = createUnzip();

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
