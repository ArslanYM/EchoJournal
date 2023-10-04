const mongoose = require("mongoose");

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "blog" }],
});

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  publishedDate: Date.now,
});

const User = mongoose.model("User", userSchema);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = {
  User,
  Blog,
};
