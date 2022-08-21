// //DEPENDENCIES
const inventories = require('express').Router();
const db = require('../models');
const { Inventory } = db;
const { Op } = require('sequelize');

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

// inventories.get('/:category', async (req, res) => {
//   try {
//     const foundInventories = await Inventory.findAll({
//       where: { category: req.params.category },
//     })
//     res.status(200).json(foundInventories)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// })

// inventories.get('/:mens', async (req, res) => {
//   try {
//     const foundInventory = await Inventory.findAll({
//       where: { category: req.params.category

//       },
//     })
//     res.status(200).json(foundInventory)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// })
// //GET INVENTORY IDs
// inventory.get('/', async (req, res) => {});

// //FIND A SPECIFIC ITEM
// inventory.get('/:id', async (req, res) => {});

// //CREATE AN ITEM IN THE INVENTORY
// inventory.post('/', async (req, res) => {});

// //UPDATE AN ITEM IN THE INVENTORY
// inventory.put('/:id', async (req, res) => {});

// // DELETE AN ITEM
// inventory.delete('/:id', async (req, res) => {});

// //EXPORT AN ITEM
module.exports = inventories;
