const express = require('express');
const router = express.Router()

const {  createCategory, getcategory ,updatecategory,deletecategory} =  require('../controllers/Category.controller');
router.post("/",createCategory);
router.get("/",getcategory);
router.patch("/:id",updatecategory);
router.delete("/:id",deletecategory);

 


module.exports = router;