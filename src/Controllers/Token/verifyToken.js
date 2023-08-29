// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Token no proporcionado" });
//   }

//   try {
//     const decodedToken = jwt.verify(token, secretKey);
//     req.user = decodedToken;
//     next();
//   } catch (error) {
//     res.status(403).json({ message: "Token inválido" });
//   }
// };

// module.exports = verifyToken;
