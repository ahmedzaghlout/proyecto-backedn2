const express = require('express');
const { getCart, addToCart, buyCart, removeFromCart } = require('../controllers/cart.controller');

const router = express.Router();

router.get('/', getCart);
router.post('/', addToCart);
router.post('/buy', buyCart);
router.delete('/', removeFromCart);


module.exports = router;