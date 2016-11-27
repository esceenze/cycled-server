export default {
  port: process.env.PORT || 7000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost/cycled',
  tokenSecret: 'whatdoesthefoxsay?',
};
