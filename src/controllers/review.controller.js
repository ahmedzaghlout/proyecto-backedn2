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

const getReview = async (req, res) => {
     //{ user_id } as params
  try {
    const   id  = req.params.id;
    const review = await Review.find({ user_id: id }).lean();
    res.status(200).json({review });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};
const getReviewP = async (req, res) => {
      //{ product_id } as params
  try {
    const   id  = req.params.id;
    const review = await Review.find({ product_id: id }).lean();
    res.status(200).json({review });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};
const getReviewR = async (req, res) => {
    //{ rating } as params
  try {
    const   rate  = req.params.rate;
    const review = await Review.find({ rating: rate }).lean();
    res.status(200).json({review });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

const postAReview = async (req, res) => {
  //{user_id,product_id,rating,description}
  try {
    const review = Review.create(req.body);
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteReview = async (req, res) => {
          //{ id } as params
  try {

    await Review.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json("Review eliminado");
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
}

module.exports = { getReviews, postAReview,getReview,getReviewP,getReviewR ,deleteReview};
