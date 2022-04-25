const supertest = require("supertest");
const app = require("../app");

describe("app", () => {
  it("deve responder na raiz: rota / - status 200", () => {
    return supertest(app)
      .get("/")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});
