const express = require("express");

const app = express();

app.use(express.json());

//Importing routes.

//Importing auth.js from routes folder
const auth = require("./routes/auth");

//Importing resetPassword.js from routes folder.
const resetPassword = require("./routes/resetPassword");

//Importing checkDate.js from routes folder.
const checkDate = require("./routes/checkDate");

//Importing blog.js from routes folder.
const blog = require("./routes/blogs");

app.use("", auth);

app.use("", resetPassword);

app.use("", checkDate);

app.use("", blog);

//Importing middlewares.

//Importing not-found.js from middlewares folder.
const notFound = require("./middlewares/not-found");

//Route does not exist or page not found.
app.use(notFound);

require("dotenv").config();

//Importing connect.js from db folder.
const connectDB = require("./db/connect");

const port = 3000 || process.env.port();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Listening from port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
