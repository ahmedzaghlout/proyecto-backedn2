const { Schema, model } = require("mongoose");

const PostSchema = Schema(
  {
    owner_id: { type: String, required: true },
    img_url: { type: String, required: true },
    display_name: { type: String, required: true },
    description_id: { type: String, required: true },
    category_id: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = model("Post", PostSchema);
