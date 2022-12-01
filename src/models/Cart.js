const { Schema, model } = require("mongoose");

const CartSchema = Schema({
    product_id: {type: String, required: true},
    user_id: {type: String, required: true},

}, { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Cart", CartSchema);