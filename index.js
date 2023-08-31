const server = require("./src/server");
const { conn } = require("./src/db.js");
const DB_connect = require("./src/DB_connect/DB_connect");
const PORT = 3001;

conn
  .sync({ force: false })
  .then(async () => {
    await DB_connect();
    server.listen(PORT, () => {
      console.log(`♥ Server listening on port: ${PORT} ♥`);
    });
  })
  .catch((error) => console.error(error.message));
