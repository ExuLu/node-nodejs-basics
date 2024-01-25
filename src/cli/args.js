const parseArgs = () => {
  const argArray = process.argv.slice(2);
  const arrayWithPairs = argArray
    .map((arg, index) => {
      if (index % 2 === 0) {
        const argName = arg.replaceAll('-', '');
        const value = argArray[index + 1];
        const newStr = `${argName} is ${value}`;
        return newStr;
      } else return null;
    })
    .filter((el) => el !== null);
  arrayWithPairs.forEach((el) => console.log(el));
};

parseArgs();
