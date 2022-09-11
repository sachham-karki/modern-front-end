const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

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
});

// registerSchema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// registerSchema.methods.mailConfigurations = function () {
//   return {
//     // It should be a string of sender/server email
//     from: "Anti_Matters@outlook.com",

//     to: `${this.email}`,

//     // Subject of Email
//     subject: "Email Verification",
//     text: "hello from automations",
//     // This would be the text of email body
//     text: `Hi! There, You have recently visited
//        our website and entered your email.
//        Please follow the given link to verify your email
//        http://localhost:3000/verify/
//        Thanks`,
//   };
// };

registerSchema.methods.comparePassword = async function (
  canditatePassword
) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password); //Returns true if match or via.
  return isMatch;
};

module.exports = mongoose.model("Register", registerSchema);
