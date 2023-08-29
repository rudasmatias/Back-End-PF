const { Router } = require("express");
const productsRouter = Router();
const getAllProducts = require("../../Controllers/Products/getAllProducts");
const getProductById = require("../../Controllers/Products/getProductById");
const getProductByName = require("../../Controllers/Products/getProductByName");


productsRouter.get("/", (req, res) => {
  const { nombre } = req.query;
  !nombre ? getAllProducts(req, res) : getProductByName(req, res);
});

productsRouter.get("/:id_producto", getProductById);

module.exports = productsRouter;
