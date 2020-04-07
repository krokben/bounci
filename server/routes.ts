import * as express from "express";
import { scoreService } from "./services";

const router = express.Router();

router.get("/scores", async (req, res) =>
  res.json(await scoreService.getScores())
);

export { router };
