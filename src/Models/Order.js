const { DataTypes } = require("sequelize");
const Crud = require("./Crud");

class Order extends Crud {
  constructor(sequelize) {
    super(
      sequelize.define("Order", {
        id_order: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        package: {
          type: DataTypes.JSON,
          allowNull: false,
        },
      })
    );
  }
}

module.exports = Order;
