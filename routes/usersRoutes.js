const express = require('express');
const router = express.Router();


/*** GET ALL USERS ***/
router.get(); // MUESTRA LISTA DE USUARIOS

/*** CREATE ONE USER ***/
router.get(); // MUESTRA FORMULARIO DE REGISTRO
router.post(); // ENVÍA INFO DE FORMULARIO DE REGISTRO

/*** GET ONE USER ***/
router.get(); // MUESTRA PERFIL DE USUARIO

/*** EDIT ONE USER ***/
router.get(); // MUESTRA FORMULARIO DE EDICIÓN DE USUARIO
router.put(); // RUTA POR LA QUE VIAJAN LOS DATOS DE EDICIÓN DE USUARIO


/*** DELETE ONE USER***/
router.delete(); // RUTA POR LA QUE VIAJAN LOS DATOS DEl USUARIO A ELIMINAR

module.exports = router;