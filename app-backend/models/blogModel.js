const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  date: {
    type: String,
  },
  topic: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Blog-items", blogSchema);
