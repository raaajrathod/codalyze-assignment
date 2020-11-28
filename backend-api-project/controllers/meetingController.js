const Meeting = require("../models/meetingModel");
const AppError = require("./../utils/appError");

const catchAsync = require("../utils/catchAsync");

const factory = require("./handlerFactory");

exports.createMeeting = factory.createOne(Meeting);

exports.getAll = factory.getAll(Meeting);

exports.getMeeting = factory.getOne(Meeting);

exports.deleteMeeting = factory.deleteOne(Meeting);

exports.updateMeeting = factory.updateOne(Meeting);

