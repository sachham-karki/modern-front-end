const express = require("express");

const app = express();

app.use(express.json());

//Importing auth.js from routes folder
const auth = require("./routes/auth");

app.use("", auth);

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
