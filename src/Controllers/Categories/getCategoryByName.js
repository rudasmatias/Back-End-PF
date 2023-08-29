/* 
! ESTE ARCHIVO DEFINE UN CONTROLADOR PARA BUSCAR CATEGORIAS POR SU NOMBRE */

const { Categories } = require("../../db");
const { Op } = require("sequelize");

const getCategoryByName = async (req, res) => {
  try {
    const { nombre } = req.query;

    const searchCategory = await Categories.findAll({
      where: {
        [Op.or]: [
          { nombre: { [Op.eq]: nombre } },
          { nombre: { [Op.iLike]: `%${nombre}%` } },
        ],
      },
    });

    if (searchCategory) {1
      console.log(searchCategory);
      res.status(200).json({ searchCategory });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error occurred while searching for product" });
  }
};

module.exports = getCategoryByName;
