const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    tittle: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
