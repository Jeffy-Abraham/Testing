const mongoose = require("mongoose");
const { Schema } = mongoose;

const userProfile = new Schema({
  account_age:String,
  username: String,
  email: String,
  profilePic: String,
  followers: [{}],
  following: [{}],
  description: String,
  location: String,
  userid: String,
});
const UserProfile = mongoose.model("UserProfile", userProfile);

module.exports = UserProfile;
