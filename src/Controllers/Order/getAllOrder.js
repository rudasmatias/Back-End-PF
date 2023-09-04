const { Order } = require("../../db");

const getAllOrder = async (req, res) => {
  try {
    const order = await Order.findAll();

    if (!order) throw Error("Orders Not Found");

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllOrder;
