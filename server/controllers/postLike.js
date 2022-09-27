import Like from "../models/like.js";

const postLikes = async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await Like.findOne({ name });
  if (article) {
    // const storeName = [];
    const canLike = (uid && !storeName.includes(name)) || [];
    if (canLike) {
      await Like.updateOne(
        { name },
        {
          $inc: { like: 1 },
          $push: { upvoteIds: uid },
        }
      );
      storeName.push(name);
    }
    const UpdatedArticle = await Like.findOne({ name });
    // console.log(name);
    // console.log(storeName);

    // if (article) {
    // UpdatedArticle.like += 1;
    res.json({ data: UpdatedArticle });
  } else {
    res.send("It doesn't exist");
  }
};

export { postLikes };
