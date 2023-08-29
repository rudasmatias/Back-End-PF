/* 
! ESTE ARCHIVO DEFINE UN CONTROLADOR PARA BUSCAR TODAS LOS AGRUPADORES */

const { Agrupador } = require("../../db");

const getAllaggregator = async (req, res) => {
  try {
    const aggregators = await Agrupador.findAll();

    if (!aggregators) throw Error("Aggregators Not Found");

    return res.status(200).json(aggregators);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllaggregator;
