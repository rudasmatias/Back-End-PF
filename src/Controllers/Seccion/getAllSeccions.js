/* 
! ESTE ARCHIVO DEFINE UN CONTROLADOR PARA BUSCAR TODAS LAS SECCIONES */

const { Seccion } = require("../../db");

const getAllSeccions = async (req, res) => {
  try {
    const seccions = await Seccion.findAll();

    if (!seccions) throw Error("Seccions Not Found");

    return res.status(200).json(seccions);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllSeccions;
