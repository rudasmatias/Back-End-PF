const { Products, Specification, SpecificationValue, Images } = require("../../db");

const getProductById = async (req, res) => {
  try {
    const { id_producto } = req.params;

    const product = await Products.findOne({
      where: { id_producto },
      include: [{ model: SpecificationValue, attributes: ['value', 'id'], include: [{model: Specification, attributes: ['name', 'id_specification']}], through: {attributes: []}}, { model: Images, attributes: ['url']}] }
    );

    if (!product) throw new Error("Product Not Found");

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getProductById;
