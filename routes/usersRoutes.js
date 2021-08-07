const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const usersController = require('../controllers/usersController');
const guessMiddleware = require('../middlewares/guessMiddleware'); 
//const validateLogin = require('../middlewares/validateLoginMiddleware'); 

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folderUserImage = path.join(__dirname, '../public/images/userImages');

        callback(null, folderUserImage);
    },
    filename: (req, file, callback) => {
        let imageName = 'user-' + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
});

const uploadUserImage = multer({ storage });


/*** GET ALL USERS ***/
// router.get('/', usersController.index); // MUESTRA LISTA DE USUARIOS

/*** CREATE ONE USER ***/
router.get('/register',guessMiddleware, usersController.create); // MUESTRA FORMULARIO DE REGISTRO
router.post('/', uploadUserImage.single('user-image'), usersController.store); // ENVÍA INFO DE FORMULARIO DE REGISTRO

// Formulario de login
router.get('/login', guessMiddleware,usersController.login);
router.post('/login',usersController.loginProcces);
router.get('/logout',usersController.logout);

/*** GET ONE USER ***/
router.get('/:id', usersController.detail); // MUESTRA PERFIL DE USUARIO

/*** EDIT ONE USER ***/
router.get('/:id/profile', usersController.edit); // MUESTRA FORMULARIO DE EDICIÓN DE USUARIO
router.put('/:id', uploadUserImage.single('newUserImage'), usersController.update); // RUTA POR LA QUE VIAJAN LOS DATOS DE EDICIÓN DE USUARIO

/*** DELETE ONE USER***/
router.delete('/:id', usersController.destroy); // RUTA POR LA QUE VIAJAN LOS DATOS DEl USUARIO A ELIMINAR

module.exports = router;