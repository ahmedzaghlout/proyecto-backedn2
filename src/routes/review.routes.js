const express = require("express");
const {
  getReviews,
  getReview,
  postAReview,
  getReviewP,
  getReviewR,
  deleteReview,
} = require("../controllers/review.controller");

const router = express.Router();

router.get("/", getReviews); // obtiene todas las review
router.get("/:id", getReview); //obtiene una review individual
router.get("/post/:id", getReviewP); // obtiene una review en base al producto
router.get("/rate/:rate", getReviewR); // obtiene una review en base a la nota
router.post("/", postAReview); // crea una review
router.delete("/:id", deleteReview); // elimina una review

module.exports = router;
