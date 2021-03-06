import * as express from "express";
import * as mongoose from "mongoose";
import * as supertest from "supertest";
import * as http from "http";
import { router } from "../../routes";

async function removeAllCollections(): Promise<any> {
  return Object.keys(mongoose.connection.collections).map((name) =>
    mongoose.connection.collections[name].deleteMany()
  );
}

describe("GET /users", () => {
  let app, server;

  beforeAll(async (done) => {
    const url = "mongodb://127.0.0.1/bounci-score-test";
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app = express();
    app.use(express.json());
    app.use(router);

    server = http.createServer(app);
    server.listen(done);
  });

  afterAll(async (done) => {
    await removeAllCollections();
    server.close(done);
  });

  it("SHOULD return 200Ok", async () => {
    const response = await supertest(app).get("/scores");
    expect(response.status).toBe(200);
  });
});
