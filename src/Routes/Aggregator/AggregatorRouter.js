const { Router } = require("express");
const aggregatorRouter = Router();
const getAllaggregator = require("../../Controllers/Agrupador/getAllaggregator");
const getProductosByAgrupador = require("../../Controllers/Agrupador/getProductosByAgrupador");
const getProductsOfOneAggregatorAndSection = require("../../Controllers/Agrupador/getProductsOfOneAggregatorAndSection");

// const getAllProductsOfOneSeccion = require("../../Controllers/Seccion/getAllProductsOfOneSeccion");
// const getAllProductsOfOneCategoryAndSection = require("../../Controllers/Seccion/getAllProductsOfOneCategoryAndSection");
// const getCategoryByName = require("../../Controllers/Categories/getCategoryByName");
// const getCategoryById = require("../../Controllers/Categories/getCategoryById");

// seccionRouter.get("/", (req, res) => {
//   const { nombre } = req.query;
//   !nombre ? getAllCategories(req, res) : getCategoryByName(req, res);
// });
aggregatorRouter.get("/", getAllaggregator);
aggregatorRouter.get("/:id_agrupador/productos", getProductosByAgrupador);
aggregatorRouter.get(
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

module.exports = aggregatorRouter;
