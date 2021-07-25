const express = require('express');
const multer = require('multer');
const path = require('path');
const usersController = require('../controllers/usersController');
const router = express.Router();

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
router.get('/usuarios', usersController.index); // MUESTRA LISTA DE USUARIOS

/*** CREATE ONE USER ***/
router.get('/register', usersController.create); // MUESTRA FORMULARIO DE REGISTRO
router.post('/', uploadUserImage.single('user-image'), usersController.store); // ENVÍA INFO DE FORMULARIO DE REGISTRO

/*** GET ONE USER ***/
router.get('/:id', usersController.detail); // MUESTRA PERFIL DE USUARIO

/*** EDIT ONE USER ***/
router.get('/:id/profile', usersController.edit); // MUESTRA FORMULARIO DE EDICIÓN DE USUARIO
router.put('/:id', uploadUserImage.single('newUserImage'), usersController.update); // RUTA POR LA QUE VIAJAN LOS DATOS DE EDICIÓN DE USUARIO


/*** DELETE ONE USER***/
router.delete('/:id', usersController.destroy); // RUTA POR LA QUE VIAJAN LOS DATOS DEl USUARIO A ELIMINAR

module.exports = router;