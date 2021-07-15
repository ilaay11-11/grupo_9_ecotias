const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();



/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index); // MUESTRA LISTA PRODUCTOS

/*** CREATE ONE PRODUCT ***/
router.get('/crear', productsController.create); // MUESTRA FORMULARIO DE CREACIÓN DE PRODUCTO
router.post('/', productsController.store); // ENVÍA INFO

/*** GET ONE PRODUCT ***/
router.get('/:id', productsController.detail); // MUESTRA DETALLE DE PRODUCTO

/*** EDIT ONE PRODUCT ***/
router.get('/:id/editar', productsController.edit); // MUESTRA FORMULARIO DE EDICIÓN DE PRODUCTO
router.put('/:id', productsController.update); // RUTA POR LA QUE VIAJAN LOS DATOS DE EDICIÓN DE PRODUCTO


/*** DELETE ONE PRODUCT***/
router.delete('/:id', productsController.destroy); // RUTA POR LA QUE VIAJAN LOS DATOS DE PRODUCTO A ELIMINAR


module.exports = router;