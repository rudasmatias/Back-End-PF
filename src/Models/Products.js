const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Products",
    {
      destacado: {
        type: DataTypes.INTEGER,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_seccion: {
        type: DataTypes.INTEGER,
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      imagenes: {
        type: DataTypes.JSON,
      },
      vendible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      garantia: {
        type: DataTypes.INTEGER,
      },
      iva: {
        type: DataTypes.FLOAT,
      },
      caracteristicas: {
        type: DataTypes.JSON,
      },
    },
    {
      timestamps: false,
    }
  );
};
