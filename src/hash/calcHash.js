import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { stdout } from 'process';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  let data = '';
  const readStream = createReadStream(filePath, 'utf-8');
  readStream.on('data', (chunk) => (data += chunk));
  readStream.on('end', () => {
    const hash = createHash('sha256').update(data).digest('hex');
    stdout.write(hash);
  });
};

await calculateHash();
