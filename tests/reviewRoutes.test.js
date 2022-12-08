const request = require("supertest");
const app = require("../index");
const {
  restaurantId,
  reviewerId,
  reviewByRestaurantResponseItem,
  reviewByReviewerResponseItem,
} = require("./testConstants");

describe("review routes", () => {
  it("get reviews by restaurant id", async () => {
    await request(app)
      .get(`/api/reviews`)
      .query({ restaurantId })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.results.length).toBeGreaterThanOrEqual(1);
        expect(response.body.results[0]).toStrictEqual(
          reviewByRestaurantResponseItem
        );
      });
  });

  it("get reviews by reviewer id", async () => {
    await request(app)
      .get(`/api/reviews`)
      .query({ reviewerId })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.results.length).toBeGreaterThanOrEqual(1);
        expect(response.body.results[0]).toStrictEqual(
          reviewByReviewerResponseItem
        );
      });
  });
});
