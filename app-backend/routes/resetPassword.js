const express = require("express");

const router = express.Router();

//Importing auth.js from controllers.
const { resetPassword, newpassword } = require("../controllers/resetPassword");

router.route("/resetPassword").post(resetPassword);
router.route("/newPassword/:id").patch(newpassword);

module.exports = router;