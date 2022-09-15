//Importing registerModel.js from model folder.
const Register = require("../models/registerModel");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const nodemailer = require("nodemailer");

const {
  CustomAPIError,
  UnauthenticatedError,
  BadRequestError,
} = require("../errors");

const getRegister = async (req, res) => {
  try {
    const register = await Register.find({});
    res.status(200).json({ sucess: true, data: register });
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    //Destructuring the user inputed value.
    const { name, mobileNumber, email, password } = req.body;

    //Hash the password using bcrypt package.
    const salt = await bcrypt.genSalt(10);
    const newpassword = await bcrypt.hash(password, salt);

    //Create medium to send automation email.
    const transporter = nodemailer.createTransport({
      service: "hotmail", //Domain name.
      auth: {
        user: "Anti_Matters@outlook.com", //Your user email.
        pass: "z2p9EfCfAcHM5aK", //Your password.
      },
    });

    //Create a token using jsonwebtoken npm package.
    const token = jwt.sign(
      { name, mobileNumber, email, password: newpassword },
      "Jwtsecret",
      {
        expiresIn: "120s",
      }
    );

    //Mail subjects and text.
    const mailConfigurations = {
      //Pass the sender email.
      from: "Anti_Matters@outlook.com",

      //Pass the user email.
      to: `${email}`,

      // Subject of Email
      subject: "Email Verification",
      text: "hello from automations",
      // This would be the text of email body
      text: `Hi! There, You have recently visited
  		our website and entered your email.
  		Please follow the given link to verify your email
  		http://localhost:3000/verify/${token}
  		Thanks`,
    };

    //Send for verification
    transporter.sendMail(mailConfigurations, function (error, info) {
      //If not successful.
      if (error) {
        throw new CustomAPIError("Email not send");
      }
      //If successful.
      console.log("Sent: " + info.response);
    });

    res.status(200).send("Completed register");
  } catch (error) {
    console.log(error);
  }
};

const verify = async (req, res) => {
  try {
    //Checking whether the token if vaild or not.
    let decoded = await jwt.verify(req.params.id, "Jwtsecret");
    //Writing in the database if the token is valid.
    const createUser = await Register.create({ ...decoded });
    res.status(201).json({ sucess: true, data: createUser });
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};

const login = async (req, res) => {
  try {
    //Destructuring the user inputed value.
    const { email, password } = req.body;

    //Check if email and password feild is empty.
    if (!email || !password) {
      throw new BadRequestError("Invaild credentials");
    }

    //Check if user email is in database.
    const user = await Register.findOne({ email });

    //Check if user has provided correct email.
    if (!user) {
      throw new BadRequestError("Invaild credentials");
    }

    //Check if the password matches with user provided password.
    const isPasswordCorrect = await user.comparePassword(password);

    //Throw error if user has provided incorrect password.
    if (!isPasswordCorrect) {
      throw new BadRequestError("Invaild credentials");
    }

    res.send("Successfully loged in");
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};

module.exports = {
  getRegister,
  register,
  login,
  verify,
};
