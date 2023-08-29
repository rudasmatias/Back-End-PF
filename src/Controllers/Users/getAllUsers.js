const { Users } = require("../../db");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();

    if (!users) throw Error("Products Not Found");

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllUsers;
