const { Products, Specification, SpecificationValue, Images } = require("../../db");
const { Op } = require("sequelize");

const getProductsByCalificacion = async (req, res) => {
  try {
    
    const searchProduct = await Products.findAll({
      where: {
        [Op.or]: [
          { calificacion: { [Op.gte]: 4.5 } }
        ],
      },
      include: [{ model: SpecificationValue, attributes: ['value', 'id'], include: [{model: Specification, attributes: ['name', 'id_specification']}], through: {attributes: []}}, { model: Images, attributes: ['url']}] }
    );
    if (searchProduct) {
      console.log(searchProduct);
      res.status(200).json({ searchProduct });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Error occurred while searching for product" });
  }
};

module.exports = getProductsByCalificacion;