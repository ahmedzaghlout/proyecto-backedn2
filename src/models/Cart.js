const { Schema, model } = require("mongoose");

const CartSchema = Schema({
    product_id: String,
    user_id: String,

}, { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Cart", CartSchema);