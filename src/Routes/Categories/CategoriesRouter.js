const { Router } = require("express");
const categoriesRouter = Router();
const getAllCategories = require("../../Controllers/Categories/getAllCategories");
const getCategoryByName = require("../../Controllers/Categories/getCategoryByName");
const getCategoryById = require("../../Controllers/Categories/getCategoryById");
const getProductsOfOneCategory = require("../../Controllers/Categories/getProductsOfOneCategory");

categoriesRouter.get("/", (req, res) => {
  const { nombre } = req.query;
  !nombre ? getAllCategories(req, res) : getCategoryByName(req, res);
});

categoriesRouter.get("/:id_categoria", getCategoryById);
categoriesRouter.get("/:id_categoria/productos", getProductsOfOneCategory);

module.exports = categoriesRouter;
