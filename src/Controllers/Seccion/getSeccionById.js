/* 
! ESTE ARCHIVO DEFINE UN CONTROLADOR PARA BUSCAR UNA SECCIÓN POR SU ID */

const { Seccion } = require("../../db");

const getSeccionById = async (req, res) => {
  try {
    const { id_seccion } = req.params;

    const seccion = await Seccion.findByPk(id_seccion);

    if (!seccion) throw Error("Sección Not Found");

    return res.status(200).json(seccion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getSeccionById;
