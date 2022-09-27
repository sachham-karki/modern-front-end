import mongoose from "mongoose";
// import "dotenv/config";

function connectToDb(cb) {
  const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.tz66gha.mongodb.net/${process.env.MONGO_DATA}?retryWrites=true&w=majority`;

  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.log(error.message));

  cb();
}

export { connectToDb };
