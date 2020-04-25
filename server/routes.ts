import * as express from "express";
const router = express.Router();

router.get("/scores", async (req, res) => res.json({ message: "All scores" }));

export { router };
