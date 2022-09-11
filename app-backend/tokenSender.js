const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "Anti_Matters@outlook.com",
    pass: "z2p9EfCfAcHM5aK",
  },
});

console.log(transporter);

const token = jwt.sign({ data: "Token Data" }, "Jwtsecret", {
  expiresIn: "10m",
});

// relzhtsvzltwbxvq

const mailConfigurations = {
  // It should be a string of sender/server email
  from: "Anti_Matters@outlook.com",

  to: "aashishk9092@gmail.com",

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

transporter.sendMail(mailConfigurations, function (error, info) {
  if (error) {
    console.log(error);
  }
  console.log("Sent: " + info);
});
