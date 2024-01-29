import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const workerPath = join(__dirname, './worker.js');

  const cores = cpus();
  const coresNumber = cores.length;

  const promises = [];
  for (let i = 0; i < coresNumber; i++) {
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker(workerPath, { workerData: i + 10 });
        worker.on('message', (message) => resolve(message));
        worker.on('error', (err) => {
          resolve('something');
        });
      })
    );
  }

  Promise.all(promises).then((data) => console.log(data));
};

await performCalculations();