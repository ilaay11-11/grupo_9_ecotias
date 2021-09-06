const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folderProductImage = path.join(__dirname, '../public/images/productImages');

        callback(null, folderProductImage);
    },
    filename: (req, file, callback) => {
        let imageName = 'product-' + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
});

const uploadProductImage = multer({ storage });


/*** GET ALL PRODUCTS ***/
// router.get('/', productsController.index); // MUESTRA LISTA PRODUCTOS

/*** CREATE ONE PRODUCT ***/
router.get('/crear', productsController.create); // MUESTRA FORMULARIO DE CREACIÓN DE PRODUCTO
router.post('/crear',  productsController.store); // ENVÍA INFO DE CREACIÓN DE PRODUCTO

// /*** GET ONE PRODUCT ***/
// router.get('/:id', productsController.detail); // MUESTRA DETALLE DE PRODUCTO

// /*** EDIT ONE PRODUCT ***/
// router.get('/:id/editar', productsController.edit); // MUESTRA FORMULARIO DE EDICIÓN DE PRODUCTO
// router.put('/:id', uploadProductImage.single('newProductImage'), productsController.update); // RUTA POR LA QUE VIAJAN LOS DATOS DE EDICIÓN DE PRODUCTO


// /*** DELETE ONE PRODUCT***/
// router.delete('/:id', productsController.destroy); // RUTA POR LA QUE VIAJAN LOS DATOS DE PRODUCTO A ELIMINAR


module.exports = router;