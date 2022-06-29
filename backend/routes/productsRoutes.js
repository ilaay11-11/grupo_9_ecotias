const express = require("express");
const router = express.Router();

const uploadUserImage = require("../middlewares/storageProductsMiddleware");
const validationProductsMiddleware = require("../middlewares/validationProductsMiddleware");
const validationEditProductsMiddleware = require("../middlewares/validationEditProductsMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index); // MUESTRA LISTA PRODUCTOS

/*** CREATE ONE PRODUCT ***/
router.get("/crear", authMiddleware, productsController.create); // MUESTRA FORMULARIO DE CREACIÓN DE PRODUCTO
router.post(
  "/crear",
  uploadUserImage.single("product_image"),
  validationProductsMiddleware,
  productsController.store
); // ENVÍA INFO DE CREACIÓN DE PRODUCTO

// /*** GET ONE PRODUCT ***/
router.get("/:id", productsController.detail); // MUESTRA DETALLE DE PRODUCTO

// /*** EDIT ONE PRODUCT ***/
router.get("/:id/editar", authMiddleware, productsController.edit); // MUESTRA FORMULARIO DE EDICIÓN DE PRODUCTO
router.put(
  "/:id",
  uploadUserImage.single("newProductImage"),
  validationEditProductsMiddleware,
  productsController.update
); // RUTA POR LA QUE VIAJAN LOS DATOS DE EDICIÓN DE PRODUCTO

// /*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy); // RUTA POR LA QUE VIAJAN LOS DATOS DE PRODUCTO A ELIMINAR

module.exports = router;
