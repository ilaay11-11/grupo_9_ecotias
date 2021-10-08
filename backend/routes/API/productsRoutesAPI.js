const express = require('express');
const router = express.Router();
const uploadUserImage = require('../../middlewares/storageProductsMiddleware');
const validationProductsMiddleware = require('../../middlewares/validationProductsMiddleware');
const validationEditProductsMiddleware = require('../../middlewares/validationEditProductsMiddleware');

const productsControllerAPI = require('../../controllers/API/productsControllerAPI');


/*** GET ALL PRODUCTS ***/
router.get('/', productsControllerAPI.index); // MUESTRA LISTA PRODUCTOS

/*** CREATE ONE PRODUCT ***/
router.get('/crear', productsControllerAPI.create); // MUESTRA FORMULARIO DE CREACIÓN DE PRODUCTO
router.post('/crear', uploadUserImage.single('product_image'), validationProductsMiddleware, productsControllerAPI.store); // ENVÍA INFO DE CREACIÓN DE PRODUCTO

// /*** GET ONE PRODUCT ***/
router.get('/:id', productsControllerAPI.detail); // MUESTRA DETALLE DE PRODUCTO

// /*** EDIT ONE PRODUCT ***/
router.get('/:id/editar', productsControllerAPI.edit); // MUESTRA FORMULARIO DE EDICIÓN DE PRODUCTO
router.put('/:id', uploadUserImage.single('newProductImage'), validationEditProductsMiddleware, productsControllerAPI.update); // RUTA POR LA QUE VIAJAN LOS DATOS DE EDICIÓN DE PRODUCTO


// /*** DELETE ONE PRODUCT***/
router.delete('/:id', productsControllerAPI.destroy); // RUTA POR LA QUE VIAJAN LOS DATOS DE PRODUCTO A ELIMINAR


module.exports = router;