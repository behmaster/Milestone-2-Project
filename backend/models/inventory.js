'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inventory.init({
    product_id: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    category: DataTypes.STRING,
    sunglass: DataTypes.BOOLEAN,
    color: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'inventory',
  });
  return inventory;
};