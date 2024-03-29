const express = require("express");

const router = express.Router();

//Importing auth.js from controllers.
const { getRegister, register, login, verify } = require("../controllers/auth");

router.route("/register").get(getRegister).post(register);
router.route("/login").post(login);
router.route("/verify/:id").post(verify);

module.exports = router;
