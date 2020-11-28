const mongoose = require("mongoose");
const validator = require("validator");

const meetingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  startTime: {
    type: String,
    required: [true, "Start Time is required"],
  },
  endTime: {
    type: String,
    required: [true, "end Time is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  participants: [
    {
      name: {
        type: String,
        required: [true, "Please Enter Name"],
      },
      email: {
        type: String,
        required: [true, "Please Enter Email"],
        // unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please Provide Valid Email"],
      },
      rspv: {
        type: String,
      },
    },
  ],
});
  
const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
