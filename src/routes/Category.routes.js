const express = require('express');
const router = express.Router()

const {  createCategory, getcategory ,updatecategory,deletecategory} =  require('../controllers/Category.controller');
router.post("/",createCategory); // crea una categoria
router.get("/",getcategory); // trae todas las categorias
router.patch("/:id",updatecategory); //actualiza una categoria
router.delete("/:id",deletecategory); // elimina una categoria

 


module.exports = router;