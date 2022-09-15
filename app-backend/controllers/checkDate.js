const Register = require("../models/registerModel");

const checkDate = async (req, res) => {
  const user = await Register.countDocuments({ $lt: new Date('2022-04-08'), $gt: new Date('2022-04-01') });

};

module.exports = { checkDate };
