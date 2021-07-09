const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/crear', productsController.create);

module.exports = router;