const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.route("/").post(userController.createUser).get(userController.getAll);

router
  .route("/:id")
  .delete(userController.deleteUser)
  .get(userController.getUser)
  .patch(userController.updateUser);

module.exports = router;
