const { Favoritos } = require("../../db");

const deleteFavorite = async (req, res) => {
  try {
    const { ProductIdProducto, UserId } = req.params;

    await Favoritos.destroy({
      where: { ProductIdProducto: ProductIdProducto, UserId: UserId },
    });

    res.json({ message: `Product was deleted successfully` });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error al eliminar la productos de las favoritos" });
  }
};

module.exports = deleteFavorite;
