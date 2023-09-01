const express = require("express");
const usersRouter = require("./Users/UsersRouter");
const productsRouter = require("./Products/ProductsRouter");
const categoriesRouter = require("./Categories/CategoriesRouter");
const seccionRouter = require("./Seccion/SeccionRouter");
const macroCategoryRouter = require("./MacroCategory/MacroCategoryRouter.js");
const specificationRouter = require("./Specifications/SpecificationRouter");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/productos", productsRouter);
router.use("/categorias", categoriesRouter);
router.use("/seccion", seccionRouter);
router.use("/macroCategories", macroCategoryRouter);
router.use("/specifications", specificationRouter);

module.exports = router;

/*
const tokenRouter = require("./Token/tokenRouter");
router.use("/token", tokenRouter);
*/
