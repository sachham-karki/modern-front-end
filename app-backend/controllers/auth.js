//Importing registerModel.js from model folder.
const Register = require("../models/registerModel");

const getRegister = async (req, res) => {
  const register = await Register.find({});
  res.json({ sucess: true, data: register });
};

const register = async (req, res) => {
  const register = await Register.create(req.body);
  res.json({ sucess: true, data: register });
};

const login = (req, res) => {
  res.send("hello from login");
};

module.exports = { getRegister, register, login };
