const { connect } = require("mongoose");
const config = require("../config");

(async () => {
  try {
    const db = await connect(config.MONGODB_URI);
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();

console.log(config.MONGODB_URI)