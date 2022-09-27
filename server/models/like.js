import mongoose from "mongoose";

const likesSchema = new mongoose.Schema({
  name: String,
  like: Number,
});

// //creating collection
const like = new mongoose.model("Like", likesSchema);

export default like;
