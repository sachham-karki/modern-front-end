import express from "express";
//importing __dir
import { fileURLToPath } from "url";
import path from "path";

//importing dotenv from package
import "dotenv/config";

import { connectToDb } from "./db/connect.js";
// import bodyParser from 'body-parser';
import cors from "cors";
import { loadUser } from "./middlware/loadUser.js";
import postRoutes from "./routes/posts.js";
import displayLikes from "./routes/displayLikes.js";
import postLikes from "./routes/postLike.js";
//importing to load crediantial.json
import fs from "fs";
import admin from "firebase-admin";
//adding firebase auth to node.js
const credentials = JSON.parse(fs.readFileSync("./credentials.json"));
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();

app.use("/posts", postRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//use static file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "./build")));

app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

//Using middleware to automatically load user info when we receive request
app.use(async (req, res, next) => {
  const { authtoken } = req.headers;

  if (authtoken) {
    try {
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (e) {
      return res.sendStatus(400);
    }
  }

  req.user = req.user || {};

  next();
});

//To display like.
app.use("", displayLikes);

app.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
});

//To post like.
app.use("", postLikes);

const PORT = process.env.PORT || 8000;

connectToDb(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at port:${PORT}`);
  });
});
