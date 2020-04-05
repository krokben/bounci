import * as express from "express";

const router = express.Router();

router.get("/scores", (req, res) => res.status(200).send("Scores"));

export { router };
