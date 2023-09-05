const { DataTypes } = require("sequelize");
const Crud = require("./Crud");

class Category extends Crud {
  constructor(sequelize) {
    super(
      sequelize.define(
        "Categories",
        {
          id_categoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
          },
          nombre: {
            type: DataTypes.STRING,
          },
          id_agrupador: {
            type: DataTypes.INTEGER,
          },
        },
        {
          timestamps: false,
        }
      )
    );
  }
}
module.exports = Category;
