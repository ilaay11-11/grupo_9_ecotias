const express = require('express');
const router = express.Router();

const validationRegisterMiddleware = require('../middlewares/validationMiddleware');
const uploadUserImage = require('../middlewares/storageUsersMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const usersController = require('../controllers/usersController');


/*** GET ALL USERS ***/
// router.get('/', usersController.index); // MUESTRA LISTA DE USUARIOS

/*** CREATE ONE USER ***/
router.get('/register',guestMiddleware, usersController.create); // MUESTRA FORMULARIO DE REGISTRO
router.post('/', uploadUserImage.single('user-image'), validationRegisterMiddleware, usersController.store); // ENVÍA INFO DE FORMULARIO DE REGISTRO

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);
router.post('/login',usersController.loginProcces);
router.get('/logout',usersController.logout);

/*** GET ONE USER ***/
router.get('/profile', authMiddleware, usersController.detail); // MUESTRA PERFIL DE USUARIO

/*** EDIT ONE USER ***/
router.get('/:id/edit', usersController.edit); // MUESTRA FORMULARIO DE EDICIÓN DE USUARIO
router.put('/:id', uploadUserImage.single('newUserimage'), usersController.update); // RUTA POR LA QUE VIAJAN LOS DATOS DE EDICIÓN DE USUARIO

/*** DELETE ONE USER***/
router.delete('/:id', usersController.destroy); // RUTA POR LA QUE VIAJAN LOS DATOS DEl USUARIO A ELIMINAR

module.exports = router;