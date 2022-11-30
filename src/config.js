const { config } = require("dotenv");
config();

const configurations = {
  PORT: process.env.PORT || 8080,
  MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  MONGODB_DATABASE: process.env.MONGODB_DB || 27017,
  MONGODB_URI: `mongodb+srv://${process.env.MONGODB_HOST || "localhost"}:${
    process.env.MONGODB_DATABASE || 27017
  }`,
};

module.exports = configurations;