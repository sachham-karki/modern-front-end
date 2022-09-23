import express from "express";
import mongoose from "mongoose";
// import bodyParser from 'body-parser';
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/posts", postRoutes);

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const likesSchema = new mongoose.Schema({
  name: String,
  like: Number,
});

// //creating collection
const Like = new mongoose.model("Like", likesSchema);

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const CONNECTION_URL =
    "mongodb+srv://alish:alish123456@cluster0.yt2ioos.mongodb.net/test?retryWrites=true&w=majority";

  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.log(error.message));

  const result = await Like.findOne({ name });

  if (result) {
    res.json({ data: result });
  } else {
    res.sendStatus(404);
  }
});

app.put("/api/articles/:name/likes", async (req, res) => {
  const { name } = req.params;

  const CONNECTION_URL =
    "mongodb+srv://alish:alish123456@cluster0.yt2ioos.mongodb.net/test?retryWrites=true&w=majority";

  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.log(error.message));

  await Like.updateOne(
    { name },
    {
      $inc: { like: 1 },
    }
  );

  const article = await Like.findOne({ name });

  if (article) {
    article.like += 1;
    res.json({ data: article });
  } else {
    res.send("It doesn't exist");
  }
});

app.listen(PORT, () => {
  console.log(`MongoDB listening at port:${PORT}`);
});
