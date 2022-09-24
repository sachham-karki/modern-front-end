import mongoose from "mongoose";
let Like;

function connectToDb(cb) {
  const CONNECTION_URL =
    "mongodb+srv://alish:alish123456@cluster0.yt2ioos.mongodb.net/test?retryWrites=true&w=majority";

  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.log(error.message));

  cb();
}

const likesSchema = new mongoose.Schema({
  name: String,
  like: Number,
});

// //creating collection
Like = new mongoose.model("Like", likesSchema);

export { connectToDb, Like };
