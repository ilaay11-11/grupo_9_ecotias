const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/carrito', mainController.productCart);
router.get('/registro', mainController.register);

module.exports = router;