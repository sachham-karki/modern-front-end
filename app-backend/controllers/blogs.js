const blogPost = require("../models/blogModel");

const { BadRequestError } = require("../errors");

const getAllBlog = async (req, res) => {
  try {
    const blog = await blogPost.find({});
    res.status(200).json({ sucess: true, data: blog });
  } catch (error) {
    console.log(error);
  }
};

const createBlog = async (req, res) => {
  try {
    const { date, topic, description } = req.body;
    const tempUser = { date, topic, description, image: req.file.path };
    const blog = await blogPost.create(tempUser);
    res.status(201).json({ sucess: true, data: blog });
  } catch (error) {
    console.log(error);
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await blogPost.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    //Check if id is correct
    if (!blog) {
      throw new BadRequestError("Please provide correct id");
    }

    res.status(200).json({ sucess: true, data: blog });
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogPost.findOneAndDelete({ _id: id });

    //Check if id is correct
    if (!blog) {
      throw new BadRequestError("Please provide correct id");
    }

    res.status(204);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllBlog, createBlog, updateBlog, deleteBlog };
