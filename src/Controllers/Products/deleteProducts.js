const { Products } = require("../../db");

const deleteProducts = async (req, res) => {
  try {
    
    const {id_producto} = req.params;

    const producto = await Products.findByPk(id_producto);

    if(!producto) return res.status(404).json({error: 'No se encontro este producto'});

    await producto.destroy();

    return res.status(200).json({message: 'Producto eliminado correctamente'})

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteProducts;