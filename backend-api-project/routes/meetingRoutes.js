const express = require("express");
const meetingController = require("../controllers/meetingController");
const router = express.Router();

// Route /meetings/
router
  .route("/")
  .post(meetingController.createMeeting)
  .get(meetingController.getAll);

// Route /meeting/:id
router
  .route("/:id")
  .delete(meetingController.deleteMeeting)
  .get(meetingController.getMeeting)
  .patch(meetingController.updateMeeting);

module.exports = router;
