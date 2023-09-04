const { Order } = require("../../db");

const updateOrder = async (req, res) => {
  try {
    const { id_order } = req.params;
    const { status, package } = req.body;
    const order = await Order.findOne({ where: { id_order } });

    if (!order) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    if (status) {
      order.status = status;
    }

    if (package) {
      order.package = package;
    }

    await order.save();

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = updateOrder;
