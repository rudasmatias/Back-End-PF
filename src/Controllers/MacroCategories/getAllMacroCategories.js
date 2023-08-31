/* 
! ESTE ARCHIVO DEFINE UN CONTROLADOR PARA BUSCAR TODAS LOS MacroCategoryES */

const { MacroCategory, macrocategoryModel } = require("../../db");

const getAllMacroCategoriesController = async () => {
  const macroCategories = await macrocategoryModel.readAll();
  return macroCategories;
};

const getAllMacroCategories = async (req, res) => {
  try {
    const macroCategories = await getAllMacroCategoriesController();

    if (!macroCategories) throw Error("Aggregators Not Found");
    const response = { message: "todo ok", macroCategories };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllMacroCategories;
