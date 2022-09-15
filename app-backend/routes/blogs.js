const express = require("express");

const router = express.Router();

//Importing multer to upload image.
const multer = require("multer");

//Storing in local storage.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

//Uploading the image that is either jpeg or png.
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Please provided valid image format"), false);
  }
};

//Storing image in local storage,limit the size to 5Mb and filter image.
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});

//Importing createblog function from controllers folder.
const {
  getAllBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs");

//The upload.single middleware is used in every route we define.
router.use(upload.single("image"));

/* The upload.single middleware could be used before createBlog function
but not docs were avaiable for it. */
router.route("/blog").get(getAllBlog).post(createBlog);

router.route("/blog/:id").patch(updateBlog).delete(deleteBlog);

module.exports = router;
