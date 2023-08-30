const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
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
      imagen: {
        type: DataTypes.STRING,
      },
      orden: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
