const { Schema, model } = require("mongoose");

const HistorySchema = Schema({
  product_id: Schema.Types.ObjectId,
  user_id: Schema.Types.ObjectId,
});

module.exports = model("History", HistorySchema);
