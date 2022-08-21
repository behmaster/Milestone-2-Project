//DEPENDENCIES
const inventories = require('express').Router();
const db = require('../models');
const { Inventory } = db;
const { Op } = require('sequelize');

//FIND ALL CUSTOMER IDS
inventories.get('/', async (req, res) => {
	try {
		const foundInventories = await Inventory.findAll({
			where: {
				category: {
					[Op.like]: `%${req.query.category ? req.query.category : ''}%`,
				},
			},
		});
		res.status(200).json(foundInventories);
	} catch (error) {
		res.status(500).json(error);
	}
});

// inventories.get('/:category', async (req, res) => {
// 	try {
// 		const foundInventory = await Inventory.findAll({
// 			where: { category: req.params.category },
// 		});
// 		res.status(200).json(foundInventory);
// 	} catch (error) {
// 		res.status(500).json(error);
// 	}
// });

inventories.get('/:model', async (req, res) => {
	try {
		const foundInventory = await Inventory.findOne({
			where: { model: req.params.model },
		});
		res.status(200).json(foundInventory);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = inventories;

// //All products route
// inventory.get('/', (req, res) => {
// 	console.log(req.params);
// 	res.render('', {
// 		product_id: 1,
// 	});
// });

// //  Men's Glasses Store Page
// inventory.get('/mens', (req, res) => {
// 	console.log(req.params);
// 	res.render('inventory', {
// 		product_id: 1,
// 		title: `Men's Glasses`,
// 	});
// });

// //FIND A SPECIFIC ITEM
// inventory.get('/:product_id', async (req, res) => {
// 	console.log(req.params);
// 	res.send('product id route');
// });

//EXPORT AN ITEM
