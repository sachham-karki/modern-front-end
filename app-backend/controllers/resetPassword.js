//Importing registerModel.js from model folder.
const Register = require("../models/registerModel");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const nodemailer = require("nodemailer");

const resetPassword = async (req, res) => {
  try {
    //Destructuring the user inputed value.
    const { email } = req.body;

    //Search user provided email in database.
    const user = await Register.findOne({ email });

    //Throw error if user does not exist.
    if (!user) {
      return res.send("Please provide correct email");
    }
    
    //Get transporter function from register model.
    const transporter = nodemailer.createTransport(await user.traspoter());

    const token = jwt.sign(
      {
        name: user.name,
        mobileNumber: user.mobileNumber,
        email: user.email,
        password: user.password,
      },
      "Jwtpasswordsecret",
      {
        expiresIn: "365d",
      }
    );

    //Geting mailConfigurations for password reset from register model.
    const mailConfigurations = await user.mailConfigurationsForReset(token);

    //Send verifications
    transporter.sendMail(mailConfigurations, function (error, info) {
      //Throw error if unsucessful.
      if (error) {
        throw new Error("Email not send");
      }
      //Print if sucessful.
      console.log("Sent: " + info.response);
    });

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const newpassword = async (req, res) => {
  try {
    //Check if token is vaild.
    let decoded = await jwt.verify(req.params.id, "Jwtpasswordsecret");

    //Destructuring the user inputed value.
    const { password, samePassword } = req.body;

    //Check if password and samePassword field is empty.
    if (!password || !samePassword) {
      return res.send("Please provide password");
    }

    //Check if both password are same.
    if (password != samePassword) {
      return res.send("Please provide same password on both fields");
    }

    //Hash the password using bcrypt package.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Find and update the password of database.
    let user = await Register.findOneAndUpdate(
      { email: decoded.email },
      { password: hashedPassword },
      {
        new: true,
        runValidators: true,
      }
    );

    res.json({ sucess: true, data: user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { resetPassword, newpassword };
