const { Users } = require("../../db");

const createUser = async (req, res) => {
  try {
    const {  username, email, password, firstName, lastName, phoneNumber } =
      req.body;

    if (
      !username ||
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !phoneNumber
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newUser = await Users.create({
      username,
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    });

    if (!newUser) throw Error("Users Not Found");

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = createUser;
