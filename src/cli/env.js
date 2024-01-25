const parseEnv = () => {
  const envsRSS = Object.keys(process.env)
    .filter((key) => key.includes('RSS'))
    .map((key) => {
      const value = process.env[key];
      const string = `${key}=${value}`;
      return string;
    });
  envsRSS.forEach((envValue) => console.log(envValue));
};

parseEnv();
