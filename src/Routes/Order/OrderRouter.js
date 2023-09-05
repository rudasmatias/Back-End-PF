const { Router } = require("express");
const orderRouter = Router();
const getAllOrder = require("../../Controllers/Order/getAllOrder");
const getOrderById = require("../../Controllers/Order/getOrderById");
const createOrder = require("../../Controllers/Order/createOrder");
const updateOrder = require("../../Controllers/Order/updateOrder");
const deleteOrder = require("../../Controllers/Order/deleteOrder");

orderRouter.get("/", getAllOrder);
orderRouter.get("/:id_order", getOrderById);
orderRouter.post("/", createOrder);
orderRouter.put("/:id_order", updateOrder);
orderRouter.delete("/:id_order", deleteOrder);

module.exports = orderRouter;
