const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  display_name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = model("User", UserSchema);
