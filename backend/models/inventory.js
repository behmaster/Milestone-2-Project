('use strict');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Inventory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Inventory.init(
		{
			product_id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			brand: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			model: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			category: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			sunglass: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			color: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.DECIMAL,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Inventory',
			tableName: 'inventories',
			timestamps: false,
		}
	);
	return Inventory;
};
