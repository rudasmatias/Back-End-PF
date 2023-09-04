const { Order } = require("../../db");

const createOrder = async (req, res) => {
  try {
    const newOrderData = req.body;
    const newOrder = await Order.create(newOrderData);
    return res.status(201).json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = createOrder;
