'use-strict'
const sequelize = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        static associate({ Rating }) {
            Customer.hasMany(Rating, {
                foreignKey: 'customer_id'
            })
        }
    }
}

Customer.init({
    customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    city: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    zip: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    timestamps: false
})