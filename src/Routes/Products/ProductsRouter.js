const { Router } = require("express");
const productsRouter = Router();
const getAllProducts = require("../../Controllers/Products/getAllProducts");
const getProductById = require("../../Controllers/Products/getProductById");
const getProductByName = require("../../Controllers/Products/getProductByName");
const getProductsByCalificacion = require("../../Controllers/Products/getProductsByCalificacion");
const postProducts = require("../../Controllers/Products/postProducts");



productsRouter.get("/", (req, res) => {
  const { nombre } = req.query;
  !nombre ? getAllProducts(req, res) : getProductByName(req, res);
});

productsRouter.get("/calificacion", getProductsByCalificacion);

productsRouter.get("/:id_producto", getProductById);

productsRouter.post("/", postProducts);

module.exports = productsRouter;
