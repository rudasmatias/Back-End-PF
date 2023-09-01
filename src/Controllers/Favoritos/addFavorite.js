const { Favoritos } = require("../../db");

const addFavorite = async (req, res) => {
  const { ProductIdProducto, UserId } = req.params;

  try {
    const favorite = await Favoritos.create({
      ProductIdProducto: ProductIdProducto,
      UserId: UserId,
    });

    console.log(`Product was favorite added successfully!`);
    return res.status(201).send(favorite);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = addFavorite;
