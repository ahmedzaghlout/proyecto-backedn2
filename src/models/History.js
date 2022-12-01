const { Schema, model } = require("mongoose");

const HistorySchema = Schema({
  product_id: { type: String, required: true },
  user_id: { type: String, required: true },
});

module.exports = model("History", HistorySchema);
