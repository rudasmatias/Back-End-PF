const { Location } = require("../../db");

const getLocationById = async (req, res) => {
  try {
    const { id_location } = req.params;
    // console.log(id_location);

    if (!id_location) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const location = await Location.findOne({ where: { id_location } });

    // console.log(location);

    if (!location) {
      return res.status(404).json({ location });
    }

    return res.status(200).json(location);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getLocationById;
