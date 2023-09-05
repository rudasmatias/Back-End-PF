const { DataTypes } = require("sequelize");
const Crud = require("./Crud");

class Role extends Crud {
  constructor(sequelize) {
    super(
      sequelize.define(
        "Role",
        {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        { timestamps: false }
      )
    );
  }
}

module.exports = Role;
