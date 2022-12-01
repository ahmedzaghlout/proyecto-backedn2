const { Schema, model } = require("mongoose");

const ReviewSchema = Schema(
    {
        user_id: {type: String, required: true},
        product_id: {type: String, required: true},
        rating: {type: Number, required: true},
        description: {type: String, required: true}
    }, { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Review", ReviewSchema);
