import { ScoreService } from "../../services/scoreService/index";
import { ScoreModel } from "../../scores/model";

describe("Score Service", () => {
  it("Should get all scores", async () => {
    const find = jest.fn().mockReturnValue([]);
    const model: ScoreModel = { find } as any;
    const service = new ScoreService(model);
    const result = await service.getScores();

    expect(result).toEqual([]);
  });

  it("Should create score", async () => {
    // const save = jest.fn().mockReturnThis();
    const find = jest
      .fn()
      .mockReturnValue(Promise.resolve({ id: 1, name: "johndoe", score: 1 }));
    const model: ScoreModel =
      {
        findOne: find,
      } as any;
    const service = new ScoreService(model);
    const result = await service.createScore({ name: "johndoe", score: 1 });
    // expect(save).toBeCalledTimes(1);
    expect(result).toEqual({ id: 1, name: "johndoe", score: 1 });
  });
});
