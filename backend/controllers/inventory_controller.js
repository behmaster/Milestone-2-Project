// //DEPENDENCIES
const inventory = require('express').Router();
const db = require('../models');
const { Inventory, Customer, Review, Transaction } = db;
const { Op } = require('sequelize');


inventory.get('/', async (req, res) => {
  try {
    const foundInventory = await Inventory.findAll({
      where: {
        model: {
          [Op.like]: `%${req.query.model ? req.query.model : ''}%`,
        },
      },
    })
    res.status(200).json(foundCustomers)
  } catch (error) {
    res.status(500).json(error)
  }
})
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
module.exports = inventory;
