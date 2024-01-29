import { stdin, stdout } from 'process';

const transform = async () => {
  stdin.on('data', (data) => {
    const reverseData = data.toString().split('').reverse().join('');
    stdout.write(reverseData);
    process.exit();
  });
};

await transform();
