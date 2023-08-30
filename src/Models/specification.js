const { DataTypes, Sequelize } = require("sequelize");
const Crud = require("./Crud");

class Specification extends Crud {
  constructor(sequelize) {
    super(
      sequelize.define(
        "Specification",
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          value: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        {
          timestamps: false,
        }
      )
    );
  }
}

module.exports = Specification;
