const { Users, Role } = require("../../db");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      timeStamps: false,
      include: [{ model: Role, attributes: ["description"] }],
    });

    if (!users) throw Error("Products Not Found");

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

module.exports = getAllUsers;
