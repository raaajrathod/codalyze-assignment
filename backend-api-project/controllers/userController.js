const User = require("../models/userModel");
const AppError = require("./../utils/appError");

const catchAsync = require("../utils/catchAsync");

const factory = require("./handlerFactory");

exports.createUser = factory.createOne(User);

exports.getAll = factory.getAll(User);

exports.getUser = factory.getOne(User);

exports.deleteUser = factory.deleteOne(User);

exports.updateUser = factory.updateOne(User);
