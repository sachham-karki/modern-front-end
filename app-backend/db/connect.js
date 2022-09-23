const mongoose = require("mongoose");
url =
  "mongodb+srv://alish:alish123456@cluster0.yt2ioos.mongodb.net/?retryWrites=true&w=majority";
const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
