import * as express from "express";
import * as supertest from "supertest";
import * as http from "http";
import { router } from "../../routes";

describe("GET /users", () => {
  let app, server;

  beforeAll((done) => {
    app = express();
    app.use(express.json());
    app.use(router);

    server = http.createServer(app);
    server.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it("SHOULD return 200Ok", async () => {
    const response = await supertest(app).get("/scores");
    expect(response.status).toBe(200);
  });
});
