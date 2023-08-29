// ! Completar

const { Agrupador, Categoria, Producto } = require("../../db");

const getProductosByAgrupador = async (req, res) => {
  try {
    const { id_agrupador } = req.params; // Obtener el ID del agrupador desde los parámetros de la solicitud

    // Obtener todas las categorías relacionadas con el agrupador
    const categorias = await Categoria.findAll({
      where: { id_agrupador },
    });

    // Obtener todos los productos que pertenecen a las categorías relacionadas con el agrupador
    const productos = await Producto.findAll({
      where: {
        id_categoria: categorias.map((categoria) => categoria.id_categoria),
      },
    });

    if (!productos) throw Error("Productos Not Found");

    return res.status(200).json(productos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getProductosByAgrupador;
