const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String // "organizer" or "customer"
});

module.exports = mongoose.model("User", userSchema);