const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/crear', productsController.create);
router.get('/crea', productsController.createe); // PROVISIONAL

module.exports = router;