const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
    maxlength: 50,
    minlength: 3,
  },
  mobileNumber: {
    type: Number,
    trim: true,
    required: [true, "Please provide moblie number"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

registerSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password); //Returns true if match or via.
  return isMatch;
};

/*             For sending mail                      */
registerSchema.methods.traspoter = function () {
  return {
    service: "hotmail", //Domain name.
    auth: {
      user: "Anti_Matters@outlook.com", //Your user email.
      pass: "z2p9EfCfAcHM5aK", //Your password.
    },
  };
};

registerSchema.methods.mailConfigurationsForReset = function (token) {
  return {
    // It should be a string of sender/server email
    from: "Anti_Matters@outlook.com",

    to: `${this.email}`,

    // Subject of Email
    subject: "Password Reset",
    text: "hello from automations",
    // This would be the text of email body
    text: `Hi! There, You have recently visited
         our website and entered your email to reset.
         Please enter the following password to reset the password
         http://localhost:3000/verify/${token}
         Thanks`,
  };
};

module.exports = mongoose.model("Register", registerSchema);
