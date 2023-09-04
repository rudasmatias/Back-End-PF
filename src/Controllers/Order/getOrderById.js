const { Order } = require("../../db");

const getOrderById = async (req, res) => {
  try {
    const { id_order } = req.params;
    const order = await Order.findByPk(id_order);

    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getOrderById;
