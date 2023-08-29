/* 
! ESTE ARCHIVO DEFINE UN CONTROLADOR PARA BUSCAR CATEGORIAS POR SU ID */

const { Categories } = require("../../db");

const getCategoryById = async (req, res) => {
  try {
    const { id_categoria } = req.params;

    const category = await Categories.findOne({
      where: { id_categoria },
    });

    if (!category) throw new Error("Product Not Found");

    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getCategoryById;
