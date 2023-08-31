const { Products } = require("../../db");

const updateProducts = async (req, res) => {
  try {
    const { id_producto } = req.params;
    
    const { nombre, calificacion, precio, descuento, stock } = req.body;

    const producto = await Products.findByPk(id_producto);

    if(!producto) return res.status(404).json({message: 'Producto no encontrado'});

    if(nombre) {
        producto.nombre = nombre;
    }

    if(calificacion) {
        producto.calificacion = calificacion;
    }

    if(precio) {
        producto.precio = precio;
    }

    if(descuento) {
        producto.descuento = descuento;
    }

    if(stock) {
        producto.stock = stock;
    }

    await producto.save();

    return res.status(200).json({ message: 'Producto actualizado', producto });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = updateProducts;