const { Products} = require("../../db");
const { Op } = require("sequelize");

const getEliminatedProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
        paranoid: false,
        where: {
            deletedAt: {
                [Op.not]: null
            }
        }
    })

    if (!products) return res.status(404).json({error: 'No se encontraron productos eliminados'});

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getEliminatedProducts;