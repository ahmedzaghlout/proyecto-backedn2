const { Schema, model } = require("mongoose");

const PostSchema = Schema(
    {
        owner_id: String,
        img_url: String,
        display_name: String,
        description_id: String,
        category_id:String,
        price: String,
      },
      { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Post", PostSchema);
