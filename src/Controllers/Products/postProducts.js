const { Products } = require("../../db");

const postProducts = async (req, res) => {
  try {
    const { nombre, calificacion, precio, descuento, stock, id_categoria, imagen } = req.body;

    if(!nombre || !calificacion || !precio || !descuento || !stock || !id_categoria || !imagen) return res.status(400).send("Falta informacion");
    const newProduct = await Products.create({
        nombre,
        calificacion,
        precio,
        descuento,
        stock,
        garantia: 12,
        iva: 10.5,
        id_categoria
    });
    
    await newProduct.addImages({url: imagen});

    return res.status(201).json({message: 'Producto creado exitosamente'})

  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = postProducts;