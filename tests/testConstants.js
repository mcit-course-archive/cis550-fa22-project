const restaurantId = "_-9pMxBWtG_x8l4rHWBasg";

const reviewId = "-__GOJabOJ-QMiiZxMNUkQ";

const reviewerId = "__7iSC6XCyWW4pHd8Cz0SQ";

const restaurantName = "Black Chile Mexican Grill";

const restaurantResponseItem = {
  restaurantId: "_-9pMxBWtG_x8l4rHWBasg",
  restaurantName: "Black Chile Mexican Grill",
  reviewCount: 98,
  address: "2502 E Camelback Rd\nPhoenix, AZ 85016",
  categories: "Mexican, Restaurants",
  avgRating: 3.5,
  open: "N",
  longitude: -112.027204,
  latitude: 33.510207,
  city: "Phoenix",
  state: "AZ",
  imageUrl:
    "https://images.unsplash.com/photo-1501959915551-4e8d30928317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzAwNDQ0NDk&ixlib=rb-4.0.3&q=80&w=200",
};

const reviewByRestaurantResponseItem = {
  reviewerName: "Chad",
  reviewerReviewCount: 3,
  reviewerId: "3ftoEYNRKiVub4NaNut5hg",
  reviewId: "4WPZeMkzPfSipHd2xhTZAA",
  rating: 5,
  funnyCount: 1,
  usefulCount: 1,
  coolCount: 1,
  content:
    "`One of the best lunches I have had this year! Carne Asada Skewers, Roasted Corn Chowder, and the Smoked Pork Quesadilla. All three were exceptional and full of perfectly matched flavors.  I forgot to finalize this one and now this place is closed! So sad.`",
  date: "16/12/2012",
};

const reviewByReviewerResponseItem = {
  restaurantName: "Fire + Spice",
  restaurantId: "1DjRf3AdYpdlC1Df9KD6rA",
  reviewId: "6J1mpZuBjFGQhy1_4iw1Qg",
  rating: 4,
  funnyCount: 0,
  usefulCount: 1,
  coolCount: 0,
  content:
    "`Went for lunch, great experience.  Cody did a great job.  Great food in the lobby of a great hotel!`",
  date: "28/7/2012",
  imageUrl:
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzAwNDM0MDI&ixlib=rb-4.0.3&q=80&w=200",
};

const reviewerResponseItem = {
  reviewerId: "__7iSC6XCyWW4pHd8Cz0SQ",
  name: "Scott",
  avgRating: 3.57,
  funnyCount: 10,
  usefulCount: 29,
  coolCount: 8,
  reviewCount: 91,
};

module.exports = {
  restaurantId,
  reviewId,
  reviewerId,
  restaurantName,
  restaurantResponseItem,
  reviewByRestaurantResponseItem,
  reviewByReviewerResponseItem,
  reviewerResponseItem,
};
