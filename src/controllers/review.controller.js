const Review = require("../models/Review");

const getReviews = async (req, res) => {
  try {
    const { user_id, product_id } = req.query;
    const searchBy = user_id ? { user_id } : { product_id };
    const reviews = await Review.find(searchBy);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const postAReview = async (req, res) => {
  try {
    const review = Review.create(req.body);
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { getReviews, postAReview };
