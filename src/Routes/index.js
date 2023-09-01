const express = require("express");
const usersRouter = require("./Users/UsersRouter");
const productsRouter = require("./Products/ProductsRouter");
const categoriesRouter = require("./Categories/CategoriesRouter");
const seccionRouter = require("./Seccion/SeccionRouter");
// <<<<<<< HEAD
// const macroCategoryRouter = require("./MacroCategory/MacroCategory.js");
const favoritosRouter = require("./Favoritos/FavoritosRouter");
// =======
const macroCategoryRouter = require("./MacroCategory/MacroCategoryRouter.js");
const specificationRouter = require("./Specifications/SpecificationRouter");

const router = express.Router();
// >>>>>>> 5e37f79897ef70ae12f8c6a78805ff2750699383

router.use("/users", usersRouter);
router.use("/productos", productsRouter);
router.use("/categorias", categoriesRouter);
router.use("/seccion", seccionRouter);
router.use("/macroCategories", macroCategoryRouter);
// <<<<<<< HEAD
router.use("/favoritos", favoritosRouter);
// =======
router.use("/specifications", specificationRouter);
// >>>>>>> 5e37f79897ef70ae12f8c6a78805ff2750699383

module.exports = router;

/*
const tokenRouter = require("./Token/tokenRouter");
router.use("/token", tokenRouter);
*/
