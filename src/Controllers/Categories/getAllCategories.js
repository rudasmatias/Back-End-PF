/* 
! ESTE ARCHIVO DEFINE UN CONTROLADOR PARA BUSCAR TODAS LAS CATEGORIAS */

const { Categories } = require("../../db");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();

    if (!categories) throw Error("Products Not Found");

    return res.status(200).json(categories);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllCategories;
