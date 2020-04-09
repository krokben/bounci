import { ScoreService } from "../../services/scoreService";
import { ScoreModel } from "../../scores/model";

describe("Score Service", () => {
  it("Should get all scores", async () => {
    const find = jest.fn().mockReturnValue([]);
    const model: ScoreModel = { find } as any;
    const service = new ScoreService(model);
    const result = await service.getScores();

    expect(result).toEqual([]);
  });
});
