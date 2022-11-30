const { Schema, model } = require("mongoose");

const CategorySchema = Schema(
    {
        img_url: String,
        display_name: String,
        description: String,
      },
      { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Category", CategorySchema);
