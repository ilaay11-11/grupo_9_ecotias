const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

router.get("/", mainController.home); // MUESTRA HOME
router.get("/carrito", mainController.productCart); // CARRITO DE COMPRAS
router.get("/buscar", mainController.search); // BÚSQUEDA DESDE HEADER

module.exports = router;
