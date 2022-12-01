const express = require('express');
const router = express.Router()

const { register, login, prevLogin, getUsers,getUser,deleteUser,updateUser,loginToken } =  require('../controllers/user.controller');

router.post('/register', register); // crea un usuario
router.post('/login', login);// login con usuario y contraseña
router.post('/prev-login', prevLogin);
router.get('/', getUsers); // obtiene todos los usuarios
router.get('/:id', getUser);// obtiene un usuario individual
router.get('/loginT/:id',loginToken)// login con token(_id usuario)
router.delete('/:id', deleteUser);//elimina un usuario
router.patch('/:id', updateUser);// actualiza un usuario


module.exports = router;