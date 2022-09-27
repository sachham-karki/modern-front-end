import Like from "../models/like.js";

export const displayLikes = async (req, res) => {
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
};
