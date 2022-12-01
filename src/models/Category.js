const { Schema, model } = require("mongoose");

const CategorySchema = Schema(
    {
        img_url: {type: String, required: true},
        display_name: {type: String, required: true},
        description: {type: String, required: true},
      },
      { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Category", CategorySchema);
