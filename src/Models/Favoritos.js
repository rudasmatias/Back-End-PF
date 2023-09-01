const { DataTypes } = require("sequelize");
const Crud = require("./Crud");

class Favoritos extends Crud {
  constructor(sequelize) {
    super(
      sequelize.define(
        "Favoritos",
        {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          ProductIdProducto: {
            type: DataTypes.INTEGER,
            references: {
              model: "Products",
              key: "ProductIdProducto",
            },
          },
          UserId: {
            type: DataTypes.INTEGER,
            references: {
              model: "Users",
              key: "UserId",
            },
          },
        },
        {
          timestamps: false,
        }
      )
    );
  }
}

module.exports = Favoritos;
