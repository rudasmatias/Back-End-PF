const express = require("express");
const router = express.Router();
const usersRouter = require("./Users/UsersRouter");
const productsRouter = require("./Products/ProductsRouter");
const categoriesRouter = require("./Categories/CategoriesRouter");
const seccionRouter = require("./Seccion/SeccionRouter");
const macroCategoryRouter = require("./MacroCategory/MacroCategory.js");
const favoritosRouter = require("./Favoritos/FavoritosRouter");

router.use("/users", usersRouter);
router.use("/productos", productsRouter);
router.use("/categorias", categoriesRouter);
router.use("/seccion", seccionRouter);
router.use("/macroCategories", macroCategoryRouter);
router.use("/favoritos", favoritosRouter);

module.exports = router;

/*
const tokenRouter = require("./Token/tokenRouter");
router.use("/token", tokenRouter);
*/
