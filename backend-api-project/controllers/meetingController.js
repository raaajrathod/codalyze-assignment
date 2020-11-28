const Meeting = require("../models/meetingModel");
const AppError = require("./../utils/appError");

const catchAsync = require("../utils/catchAsync");

const factory = require("./handlerFactory");

// Create Meeeting
exports.createMeeting = factory.createOne(Meeting);

// Get All Meetings
exports.getAll = factory.getAll(Meeting);

// Get Particular Meeting by ID
exports.getMeeting = factory.getOne(Meeting);

// Delete Meeting
exports.deleteMeeting = factory.deleteOne(Meeting);

// Update Particular Meeting by Id
exports.updateMeeting = factory.updateOne(Meeting);
