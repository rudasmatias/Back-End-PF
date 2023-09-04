const { Products } = require("../../db");

const restoreProducts = async (req, res) => {
  try {
    
    const {id_producto} = req.params;

    const producto = await Products.findByPk(id_producto, { paranoid: false });

    if(!producto) return res.status(404).json({error: 'No se encontro este producto'});

    await producto.restore();

    return res.status(200).json({message: 'Producto restaurado correctamente'})

  } catch (error) {
    return res.status(500).json({ message: error});
  }
};

module.exports = restoreProducts;