const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Provide Valid Email"],
  },
  rspv: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
