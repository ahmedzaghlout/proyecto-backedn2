const { Schema, model} = require('mongoose');

const UserSchema = Schema ({
    display_name: String,
    username: String,
    password: String,
  })

module.exports = model("User", UserSchema);