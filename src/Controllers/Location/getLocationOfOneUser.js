const { Location, Users } = require('../../db');

const getLocationForUser = async (req, res) => {
  try {
    const userId = req.params.userId; 

  
    const user = await Users.findByPk(userId);

    if (!user) throw Error("User Not Found");


    const location = await Location.findOne({
      where: { UserId: userId },
    });

    if (!location) throw Error("Location Not Found for User");

    return res.status(200).json(location);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getLocationForUser;