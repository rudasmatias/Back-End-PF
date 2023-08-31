/* 
! ESTE ARCHIVO DEFINE UN CONTROLADOR PARA BUSCAR TODAS LAS CATEGORIAS */

const { Categories, categoriesModel } = require("../../db");

const getAllCategoriesController = async () => {
  console.log("getting categories");
  const categories = await categoriesModel.readAll();
  return categories;
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await getAllCategoriesController();
    // console.log(categories);
    const response = { message: "todo ok", categories };

    if (!categories) throw Error("Products Not Found");

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllCategories;
