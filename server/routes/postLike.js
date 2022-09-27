import express from "express";

const router = express.Router();

import { postLikes } from "../controllers/postLike.js";

router.route("/api/articles/:name/likes").put(postLikes);

export default router;
