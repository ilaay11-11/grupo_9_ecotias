const express = require('express');
const router = express.Router();

const validationRegisterMiddleware = require('../../middlewares/validationMiddleware');
const uploadUserImage = require('../../middlewares/storageUsersMiddleware');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');

const usersControllerAPI = require('../../controllers/API/usersControllerAPI');


/*** GET ALL USERS ***/
// router.get('/', usersControllerAPI.index); // MUESTRA LISTA DE USUARIOS

/*** CREATE ONE USER ***/
router.get("/", usersControllerAPI.listado);
router.get("/:id", usersControllerAPI.detaile);
//router.get('/register',guestMiddleware, usersControllerAPI.create); // MUESTRA FORMULARIO DE REGISTRO
router.post('/register', uploadUserImage.single('userImage'), validationRegisterMiddleware, usersControllerAPI.store); // ENVÍA INFO DE FORMULARIO DE REGISTRO

// Formulario de login
/* router.get('/login', guestMiddleware, usersControllerAPI.login);
router.post('/login',usersControllerAPI.loginProcces);
router.get('/logout',usersControllerAPI.logout); */

/*** GET ONE USER ***/
//router.get('/profile', authMiddleware, usersControllerAPI.detail); // MUESTRA PERFIL DE USUARIO

/*** EDIT ONE USER ***/
//router.get('/:id/edit', authMiddleware, usersControllerAPI.edit); // MUESTRA FORMULARIO DE EDICIÓN DE USUARIO
router.put('/:id', uploadUserImage.single('newUserimage'), usersControllerAPI.update); // RUTA POR LA QUE VIAJAN LOS DATOS DE EDICIÓN DE USUARIO

/*** DELETE ONE USER***/
router.delete('/:id', usersControllerAPI.destroy); // RUTA POR LA QUE VIAJAN LOS DATOS DEl USUARIO A ELIMINAR

module.exports = router;