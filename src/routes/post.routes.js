const express = require('express');
const { get } = require('mongoose');
const router = express.Router()

const {  createPost, getPosts,getPost, getPostU,getPostN,getPostC,getRecentPosts,updatepost,deletepost } = require('../controllers/post.controller');
router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/name/:name',getPostN);
router.get('/user/:id',getPostU);
router.get('/category/:id',getPostC);
router.get('/recent', getRecentPosts);
router.patch('/:id',updatepost);
router.delete('/:id',deletepost)

module.exports = router;