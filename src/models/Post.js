const { Schema, model } = require("mongoose");

const PostSchema = Schema(
    {
        owner_id: Schema.Types.ObjectId,
        img_url: String,
        display_name: String,
        description: String,
        category:String,
        price: String,
      },
      { timestamps: { createdAt: 'created_at' } }
);

module.exports = model("Post", PostSchema);
