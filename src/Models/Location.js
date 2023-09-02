const { DataTypes } = require("sequelize");
const Crud = require("./Crud");

class Location extends Crud {
  constructor(sequelize) {
    super(
      sequelize.define(
        "Location",
        {
          id_location: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          provincia: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          calle: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          codigo_postal: {
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

module.exports = Location;
