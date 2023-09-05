const { DataTypes } = require("sequelize");
const Crud = require("./Crud");

class Image extends Crud {
  constructor(sequelize) {
    super(
      sequelize.define("Images", {
        id_image: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },
        url: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      })
    );
  }
}
module.exports = Image;
