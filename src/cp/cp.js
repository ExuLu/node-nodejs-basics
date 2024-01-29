import childProcess from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
const __dirname = dirname(fileURLToPath(import.meta.url));
const scriptPath = join(__dirname, 'files', 'script.js');

  const child = childProcess.fork(scriptPath, args, { silent: true });

  child.stdout.on('data', (data) =>
    console.log(`Received from child process: ${data}\n`)
  );

  process.stdin.pipe(child.stdin);
};



spawnChildProcess([
  'someArgument1',
  'someArgument2',
  'someArgument3',
  'someArgument4',
]);
