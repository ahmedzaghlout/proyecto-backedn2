const express = require('express');
const router = express.Router()

const {  createPost, getPosts, getRecentPosts,updatepost,deletepost } = require('../controllers/post.controller');
router.post('/', createPost);
router.get('/', getPosts);
router.get('/recent', getRecentPosts);
router.patch(':id',updatepost);
router.delete(':id',deletepost)

module.exports = router;