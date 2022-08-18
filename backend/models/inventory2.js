'use-strict'
const sequelize = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Inventory extends Model {
        static associate({ Rating }) {
            Inventory.hasMany(Rating, {
                foreignKey: 'product_id'
            })
        }
    }
}

Inventory.init({
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    brand: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    model: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    category: {
        type: DataTypes.ENUM('Mens', 'Womens', 'Children'),
        allowNull: false
    },
    sunglass: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Inventory',
    tableName: 'inventories',
    timestamps: false
})