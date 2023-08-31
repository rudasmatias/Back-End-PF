const { DataTypes, Sequelize } = require("sequelize");
const Crud = require("./Crud");

class SpecificationValue extends Crud {
  constructor(sequelize) {
    super(
      sequelize.define(
        "SpecificationValue",
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
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

module.exports = SpecificationValue;
