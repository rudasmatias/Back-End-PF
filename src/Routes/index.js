const express = require("express");
const usersRouter = require("./Users/UsersRouter");
const productsRouter = require("./Products/ProductsRouter");
const categoriesRouter = require("./Categories/CategoriesRouter");
const seccionRouter = require("./Seccion/SeccionRouter");
const favoritosRouter = require("./Favoritos/FavoritosRouter");
const macroCategoryRouter = require("./MacroCategory/MacroCategoryRouter.js");
const specificationRouter = require("./Specifications/SpecificationRouter");
const locationRouter = require("./Location/LocationRouter");
const orderRouter = require("./Order/OrderRouter");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/productos", productsRouter);
router.use("/categorias", categoriesRouter);
router.use("/seccion", seccionRouter);
router.use("/macroCategories", macroCategoryRouter);
router.use("/favoritos", favoritosRouter);
router.use("/specifications", specificationRouter);
router.use("/location", locationRouter);
router.use("/order", orderRouter);

module.exports = router;

/*
const tokenRouter = require("./Token/tokenRouter");
router.use("/token", tokenRouter);
*/
