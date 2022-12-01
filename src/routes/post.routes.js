const express = require('express');
const { get } = require('mongoose');
const router = express.Router()

const {  createPost, getPosts,getPost, getPostU,getPostN,getPostC,getRecentPosts,updatepost,deletepost } = require('../controllers/post.controller');
router.post('/', createPost); //crea post
router.get('/', getPosts); // obtiene todo los post
router.get('/:id', getPost); // obtiene post individual
router.get('/name/:name',getPostN); //obtiene post en base al nombre
router.get('/user/:id',getPostU); // obtiene en base al usuario
router.get('/category/:id',getPostC); // obtiene en base a la categoria
router.get('/recent', getRecentPosts); // obtiene los post reciente
router.patch('/:id',updatepost); // actualiza el post
router.delete('/:id',deletepost) //elimina el post

module.exports = router;