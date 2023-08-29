const { Products } = require("../../db");

const getAllProductsOfOneCategoryAndSection = async (req, res) => {
  try {
    const { id_categoria, id_seccion } = req.params;

    const products = await Products.findAll({
      where: { id_categoria, id_seccion },
    });

    if (!products || products.length === 0) {
      throw new Error("No Products Found for the Category and Section");
    }

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllProductsOfOneCategoryAndSection;