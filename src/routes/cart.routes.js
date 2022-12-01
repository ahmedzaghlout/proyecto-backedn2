const express = require("express");
const {
  getCart,
  addToCart,
  buyCart,
  removeFromCart,
} = require("../controllers/cart.controller");

const router = express.Router();

router.get("/", getCart); // trae contenido cart
router.post("/", addToCart); // añade al cart
router.post("/buy", buyCart); // accion de comprar
router.delete("/", removeFromCart); // remover del cart

module.exports = router;
