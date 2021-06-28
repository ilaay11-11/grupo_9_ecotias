const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/carrito', mainController.productCart);
router.get('/producto', mainController.productDetail);
router.get('/registro', mainController.register);
router.get('/crearProducto', mainController.createProduct); // Provisional


module.exports = router;