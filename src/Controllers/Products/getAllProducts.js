const { Products, SpecificationValue, Specification, Images} = require("../../db");

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({ include: [{ model: SpecificationValue, attributes: ['value', 'id'], include: [{model: Specification, attributes: ['name', 'id_specification']}], through: {attributes: []}}, { model: Images, attributes: ['url']}] });

    if (!products) throw Error("Products Not Found");

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllProducts;