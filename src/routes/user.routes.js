const express = require('express');
const router = express.Router()

const { register, login, prevLogin, getUsers,getUser,deleteUser,updateUser,loginToken } =  require('../controllers/user.controller');

router.post('/register', register);
router.post('/login', login);
router.post('/prev-login', prevLogin);
router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/loginT/:id',loginToken)
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);


module.exports = router;