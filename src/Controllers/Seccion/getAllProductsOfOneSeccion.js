const { Products } = require("../../db");

const getAllProductsOfOneSeccion = async (req, res) => {
  try {
    const { id_seccion } = req.params;

    const products = await Products.findAll({
      where: { id_seccion },
    });

    if (!products || products.length === 0) {
      throw new Error("No Products Found for the Seccion");
    }

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllProductsOfOneSeccion;
