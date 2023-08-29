// const jwt = require("jsonwebtoken");
// const { secretKey } = require("../../../config");
// console.log(secretKey);

// const generateToken = async (req, res) => {
//   try {
//     const payload = {
//       user: "MAcarena Castillo",
//       role: "usuario",
//     };

//     const token = jwt.sign(payload, secretKey, { expiresIn: "3h" });

//     res.json({ token });
//     console.log("Token: ", token);
//   } catch (error) {
//     console.error("Error al generar el token:", error);
//     res.status(500).json({ error: "Error al generar el token" });
//   }
// };

// module.exports = generateToken;
