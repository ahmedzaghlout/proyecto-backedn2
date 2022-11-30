const { Schema, model } = require("mongoose");

const CartSchema = Schema({
    product_id: Schema.Types.ObjectId,
    user_id: Schema.Types.ObjectId,

}, { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Cart", CartSchema);