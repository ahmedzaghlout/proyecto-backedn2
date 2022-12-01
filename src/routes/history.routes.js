const express = require('express');
const  getHistory  = require('../controllers/history.controller');

const router = express.Router();

router.get('/:user_id', getHistory); //obtiene el historia de compra de un usuario

module.exports = router;
