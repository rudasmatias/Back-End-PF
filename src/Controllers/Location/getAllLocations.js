const { Location } = require("../../db");

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();

    if (!locations) throw Error("Locations Not Found");

    return res.status(200).json(locations);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllLocations;
