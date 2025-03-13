const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  image: { type: String, default: "" },
  likes: { type: Array, default: [] },
  comments: [{ userId: String, text: String, createdAt: { type: Date, default: Date.now } }],
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
