const { Schema, model } = require("mongoose");

const ReviewSchema = Schema(
    {
        user_id: String,
        product_id: String,
        rating: Number,
        description: String
    }, { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Review", ReviewSchema);
