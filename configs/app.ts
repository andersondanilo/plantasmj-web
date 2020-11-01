type Config = {
  apiUrl: string;
};

const config: Config = {
  apiUrl: process.env.API_URL,
};

export default config;
