import { ScoreModel, IScore, Score } from "../../scores/model";
import { ICreateScoreRequest } from "../../scores";

export class ScoreService {
  private scoreModel: ScoreModel;

  constructor(scoreModel: ScoreModel) {
    this.scoreModel = scoreModel;
  }

  async getScores(): Promise<IScore[]> {
    return this.scoreModel.find({});
  }

  async createScore(req: ICreateScoreRequest): Promise<IScore> {
    const score = new Score({ id: Math.random(), name: req.name, score: 0 });
    return await score.save();
  }
}
