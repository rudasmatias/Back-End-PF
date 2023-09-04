const { Favoritos, Products } = require("../../db");

const getAllFavorites = async (req, res) => {
  const { UserId } = req.params;
  try {
    const favorites = await Favoritos.findAll({
      where: { UserId: UserId },
      include: Products,
    });

    return res.status(200).send(favorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllFavorites;
