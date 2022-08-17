'use-strict'
const sequelize = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        static associate({ Customer, Inventory }) {
            Review.belongsTo(Customer, {
                foreignKey: 'customer_id'
            })
            Review.belongsTo(Inventory, {
                foreignKey: 'inventory_id'
            })
        }
    }
}


Review.init({
    rating_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating_result: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Rating',
    tableName: 'ratings',
    timestamps: false
})