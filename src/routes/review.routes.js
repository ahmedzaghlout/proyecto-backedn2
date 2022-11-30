const express = require('express');
const { getReviews, postAReview } = require('../controllers/review.controller');

const router = express.Router();

router.get('/', getReviews);
router.post('/', postAReview);

module.exports = router;
