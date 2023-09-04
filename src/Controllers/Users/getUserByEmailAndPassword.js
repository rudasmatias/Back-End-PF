const { Users } = require("../../db");

const getUserByEmailAndPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await Users.findOne({ where: { email, password } });

    console.log(user);
    console.log(user.id);

    if (!user) {
      return res.status(404).json({ access: false });
    }

    if (user.password !== password) {
      return res
        .status(401)
        .json({ message: "Credenciales incorrectas", user });
    }

    res.status(200).json({ access: true, user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* 
! Exporto el controller getUserByEmailAndPassword */
module.exports = getUserByEmailAndPassword;
