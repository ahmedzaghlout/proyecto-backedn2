const express = require('express');
const { getReviews,getReview ,postAReview,getReviewP,getReviewR,deleteReview} = require('../controllers/review.controller');

const router = express.Router();

router.get('/', getReviews);
router.get('/:id',getReview);
router.get('/post/:id',getReviewP)
router.get('/rate/:rate',getReviewR)
router.post('/', postAReview);
router.delete('/:id',deleteReview)


module.exports = router;
