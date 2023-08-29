const { Router } = require("express");
const seccionRouter = Router();
const getAllSeccions = require("../../Controllers/Seccion/getAllSeccions");
const getAllProductsOfOneSeccion = require("../../Controllers/Seccion/getAllProductsOfOneSeccion");
const getAllProductsOfOneCategoryAndSection = require("../../Controllers/Seccion/getAllProductsOfOneCategoryAndSection");
const getSeccionById = require("../../Controllers/Seccion/getSeccionById");
// const getCategoryByName = require("../../Controllers/Categories/getCategoryByName");

// seccionRouter.get("/", (req, res) => {
//   const { nombre } = req.query;
//   !nombre ? getAllCategories(req, res) : getCategoryByName(req, res);
// });
seccionRouter.get("/", getAllSeccions);
seccionRouter.get("/:id_seccion", getSeccionById);
seccionRouter.get("/:id_seccion/productos", getAllProductsOfOneSeccion);
seccionRouter.get(
  "/:id_categoria/:id_seccion/productos",
  getAllProductsOfOneCategoryAndSection
);

module.exports = seccionRouter;
