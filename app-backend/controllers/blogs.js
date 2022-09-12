const blogPost = require("../models/blogModel");

const createBlog = async (req, res) => {
  const { date, topic, description } = req.body;
  const tempUser = { date, topic, description, image: req.file.path };
  console.log(tempUser);
  const blog = await blogPost.create(tempUser);
  res.json({ sucess: true, data: blog });
};

module.exports = { createBlog };
