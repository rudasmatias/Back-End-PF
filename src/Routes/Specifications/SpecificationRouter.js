const { Router } = require("express");
const getSpecByCategory = require("../../Controllers/Specifications/getSpecificationsByCategory");

const specificationRouter = Router();

specificationRouter.get("/:id", getSpecByCategory);

module.exports = specificationRouter;
