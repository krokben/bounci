import { ScoreModel, IScore } from "../../scores/model";

export class ScoreService {
  private scoreModel: ScoreModel;

  constructor(scoreModel: ScoreModel) {
    this.scoreModel = scoreModel;
  }

  async getScores(): Promise<IScore[]> {
    return this.scoreModel.find({});
  }
}
