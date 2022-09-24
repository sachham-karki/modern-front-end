import express from "express";

import { connectToDb, Like } from "./db.js";
// import bodyParser from 'body-parser';
import cors from "cors";
import postRoutes from "./routes/posts.js";
//importing to load crediantial.json
import fs from "fs";
import admin from "firebase-admin";
//adding firebase auth to node.js
const credentials = JSON.parse(fs.readFileSync("./credentials.json"));
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/posts", postRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  //getting Id of user loaded
  const { uid } = req.user;

  const article = await Like.findOne({ name });

  if (article) {
    const likeIds = article.likeIds || [];
    article.canLike = uid && !likeIds.includes(uid);
    res.json({ data: article });
  } else {
    res.sendStatus(404);
  }
});

app.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
});

app.put("/api/articles/:name/likes", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await Like.findOne({ name });

  if (article) {
    const likeIds = article.likeIds || [];
    const canLike = uid && !likeIds.includes(uid);
    if (canLike) {
      await Like.updateOne(
        { name },
        {
          $inc: { like: 1 },
          $push: { upvoteIds: uid },
        }
      );
    }

    const UpdatedArticle = await Like.findOne({ name });

    // if (article) {
    // UpdatedArticle.like += 1;
    res.json({ data: UpdatedArticle });
  } else {
    res.send("It doesn't exist");
  }
});

connectToDb(() => {
  app.listen(PORT, () => {
    console.log(`MongoDB listening at port:${PORT}`);
  });
});
