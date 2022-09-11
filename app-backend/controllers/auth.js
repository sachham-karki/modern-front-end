//Importing registerModel.js from model folder.
const Register = require("../models/registerModel");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const nodemailer = require("nodemailer");

const getRegister = async (req, res) => {
  const register = await Register.find({});
  res.json({ sucess: true, data: register });
};

let data = {};

const register = async (req, res) => {
  // const register = await Register.create({ ...req.body });
  const { name, mobileNumber, email, password } = req.body;

  //Creating medium to send automation email.
  const transporter = nodemailer.createTransport({
    service: "hotmail", //Domain name.
    auth: {
      user: "Anti_Matters@outlook.com", //Your user email.
      pass: "z2p9EfCfAcHM5aK", //Your password.
    },
  });
  //Creating a token
  const token = jwt.sign({ data: "Token Data" }, "Jwtsecret", {
    expiresIn: "365d",
  });

  //Mail subjects and text.
  const mailConfigurations = {
    // It should be a string of sender/server email
    from: "Anti_Matters@outlook.com",

    //Passing user send email.
    to: `${email}`,

    // Subject of Email
    subject: "Email Verification",
    text: "hello from automations",
    // This would be the text of email body
    text: `Hi! There, You have recently visited
  		our website and entered your email.
  		Please follow the given link to verify your email
  		http://localhost:3000/verify/token
  		Thanks`,
  };

  //Sending verifications
  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) {
      throw new Error("Email not send");
    }
    console.log("Sent: " + info.response);
  });

  const salt = await bcrypt.genSalt(10);
  newpassword = await bcrypt.hash(password, salt);

  data = { name, mobileNumber, email, password: newpassword };
  console.log(data);
  res.send("Completed register");
};

// http://localhost:3000/verify

const verify = async (req, res) => {
  const createUser = await Register.create({ data });
  res.send("hello from verify");
  // res.json({ sucess: true, data: createUser });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //Checking if email and password feild is empty.
  if (!email || !password) {
    return res.send("please provide email and password");
  }

  const user = await Register.findOne({ email });

  // const getPassword = user.getPassword();
  // console.log(getPassword);

  //Checking if user has provided correct email.
  if (!user) {
    return res.send("Invaild credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  //Checking if user has provided correct password.
  if (!isPasswordCorrect) {
    return res.send("Invaild credentials");
  }

  res.send("Successfully loged in");
};

module.exports = { getRegister, register, login, verify };
