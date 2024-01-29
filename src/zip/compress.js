import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const compress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = join(__dirname, 'files', 'archive.gz');
  const readStream = createReadStream(filePath, 'utf-8');
  const writeStream = createWriteStream(zipPath);
  const gzip = createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
