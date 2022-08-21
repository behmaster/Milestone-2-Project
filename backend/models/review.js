'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Review extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Review.init(
		{
			rating_id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			customer_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			product_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			rating_result: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			comment: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: 'Review',
			tableName: 'reviews',
			timestamps: false,
		}
	);
	return Review;
};
