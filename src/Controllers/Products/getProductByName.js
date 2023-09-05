const {
  Products,
  Specification,
  SpecificationValue,
  Images,
} = require("../../db");
const { Op } = require("sequelize");

const getProductByName = async (req, res) => {
  try {
    const { nombre } = req.query;

    let searchProduct;

    if (nombre) {
      searchProduct = await Products.findAll({
        where: {
          [Op.or]: [
            { nombre: { [Op.eq]: nombre } },
            { nombre: { [Op.iLike]: `%${nombre}%` } },
          ],
        },
        include: [
          {
            model: SpecificationValue,
            attributes: ["value", "id"],
            include: [
              {
                model: Specification,
                attributes: ["name", "id_specification"],
              },
            ],
            through: { attributes: [] },
          },
          {
            model: Images,
            attributes: ["url"],
          },
        ],
      });
    } else {
      searchProduct = await Products.findAll();
    }

    if (searchProduct.length === 0) {
      // Si no se encontraron productos, responder con todos los productos
      const allProducts = await Products.findAll();
      res.status(200).json(allProducts);
    } else {
      console.log(searchProduct);
      res.status(200).json(searchProduct);
    }
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Error occurred while searching for product" });
  }
};

module.exports = getProductByName;
