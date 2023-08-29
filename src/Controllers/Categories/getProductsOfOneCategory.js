const { Products } = require("../../db");

const getProductsOfOneCategory = async (req, res) => {
  try {
    const { id_categoria } = req.params;

    const products = await Products.findAll({
      where: { id_categoria },
    });

    if (!products || products.length === 0) {
      throw new Error("No Products Found for the Category");
    }

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getProductsOfOneCategory;
