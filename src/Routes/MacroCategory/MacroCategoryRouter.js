const { Router } = require("express");
const getAllMacroCategories = require("../../Controllers/MacroCategories/getAllMacroCategories");
const getProductosByAgrupador = require("../../Controllers/MacroCategories/getProductosByAgrupador");
const getProductsOfOneAggregatorAndSection = require("../../Controllers/MacroCategories/getProductsOfOneAggregatorAndSection");

const macroCategoryRouter = Router();

// const getAllProductsOfOneSeccion = require("../../Controllers/Seccion/getAllProductsOfOneSeccion");
// const getAllProductsOfOneCategoryAndSection = require("../../Controllers/Seccion/getAllProductsOfOneCategoryAndSection");
// const getCategoryByName = require("../../Controllers/Categories/getCategoryByName");
// const getCategoryById = require("../../Controllers/Categories/getCategoryById");

// seccionRouter.get("/", (req, res) => {
//   const { nombre } = req.query;
//   !nombre ? getAllCategories(req, res) : getCategoryByName(req, res);
// });
macroCategoryRouter.get("/", getAllMacroCategories);
macroCategoryRouter.get("/:id_agrupador/productos", getProductosByAgrupador);
macroCategoryRouter.get(
  "/:id_agrupador/:id_seccion/productos",
  getProductsOfOneAggregatorAndSection
);
// seccionRouter.get("/:id_seccion/productos", getAllProductsOfOneSeccion);
// seccionRouter.get(
//   "/:id_categoria/:id_seccion/productos",
//   getAllProductsOfOneCategoryAndSection
// );

// seccionRouter.get("/:id_categoria", getCategoryById);
// seccionRouter.get("/:id_categoria/productos", getProductsOfOneCategory);

module.exports = macroCategoryRouter;
