const Cart = require("../models/Cart");
const History = require("../models/History");

const getCart = async (req, res) => {
  try {
    const products = await Cart.find({ user_id: req.query.user_id });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addToCart = async (req, res) => {
  //{product_id, user_id}
  try {
    const newList = await Cart.create(req.body);
    res.status(200).json(newList);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const removeFromCart = async (req, res) => {
  //{id} as query
  try {
    const remove = await Cart.findByIdAndDelete(req.query.item_id);
    res.status(200).json(remove);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const buyCart = async (req, res) => {
  //{user_id,product_id}
  try {
    const products = await Cart.find({ user_id: req.body.user_id }).sort({
      created_at: -1,
    });
    await Promise.all(
      products.map((product) => {
        return History.create({
          product_id: product.product_id,
          user_id: product.user_id,
        });
      })
    );
    await Cart.deleteMany({ user_id: req.body.user_id });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { getCart, addToCart, removeFromCart, buyCart };
