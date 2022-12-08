const request = require("supertest");
const app = require("../index");
const {
  restaurantId,
  restaurantName,
  restaurantResponseItem,
} = require("./testConstants");

describe("restaurant routes", () => {
  it("get restaurants", async () => {
    await request(app)
      .get(`/api/restaurants`)
      .query({ name: restaurantName })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.results.length).toBeGreaterThanOrEqual(1);
        expect(response.body.results[0]).toStrictEqual(restaurantResponseItem);
      });
  });

  it("get a restaurant by id", async () => {
    await request(app)
      .get(`/api/restaurant/${restaurantId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.results.length).toBe(1);
        expect(response.body.results[0]).toStrictEqual(restaurantResponseItem);
      });
  });
});
