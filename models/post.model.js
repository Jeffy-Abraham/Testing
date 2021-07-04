const mongoose = require("mongoose");
const { Schema } = mongoose;

const post = new Schema({
  PostID: String,
  creation: String,
  email: String,
  postImageLink: String,
  owneruserid: String,
  totalLikes: Number,
  likes: [{ userID: String, userName: String }],
  commentCount: Number,
  Title: String,
});
const Post = mongoose.model("Post", post);

module.exports = Post;
