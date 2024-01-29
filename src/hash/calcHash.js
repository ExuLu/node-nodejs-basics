// import sha256 from 'sha256';
import { createHash } from 'crypto';
import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  let data = '';
  const readStream = createReadStream(filePath, 'utf-8');
  readStream.on('data', (chunk) => (data += chunk));
  readStream.on('end', () => {
    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
  });
};

await calculateHash();
