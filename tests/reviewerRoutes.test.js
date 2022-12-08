const request = require("supertest");
const app = require("../index");
const { reviewerId, reviewerResponseItem } = require("./testConstants");

describe("reviewer routes", () => {
  it("get a reviewer", async () => {
    await request(app)
      .get(`/api/reviewer/${reviewerId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.results.length).toBe(1);
        expect(response.body.results[0]).toStrictEqual(reviewerResponseItem);
      });
  });
});
