const express = require("express");

const router = express.Router();

//Importing auth.js from controllers.
const { checkDate } = require("../controllers/checkDate");

router.route("/checkDate").get(checkDate);

module.exports = router;