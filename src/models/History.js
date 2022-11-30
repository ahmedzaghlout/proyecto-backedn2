const { Schema, model } = require("mongoose");

const HistorySchema = Schema({
  product_id: String,
  user_id: String,
});

module.exports = model("History", HistorySchema);
