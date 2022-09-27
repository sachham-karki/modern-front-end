import express from "express";

const router = express.Router();

import { displayLikes } from "../controllers/displayLikes.js";

router.route("/api/articles/:name").get(displayLikes);

export default router;
