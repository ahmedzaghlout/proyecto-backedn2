const { Schema, model } = require("mongoose");

const ReviewSchema = Schema(
    {
        user_id: Schema.Types.ObjectId,
        product_id: Schema.Types.ObjectId,
        rating: Number,
        description: String
    }, { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Review", ReviewSchema);
