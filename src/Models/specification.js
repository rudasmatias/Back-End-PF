const { DataTypes } = require("sequelize");
const Crud = require("./Crud");

class Specification extends Crud {
  constructor(sequelize) {
    super(
      sequelize.define(
        "Specification",
        {
          id_specification: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
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
