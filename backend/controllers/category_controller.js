const inventories = require('express').Router()
const db = require('../models')
const { Inventory } = db
const { Op } = require('sequelize')

//FIND ALL CUSTOMER IDS
inventories.get('/', async (req, res) => {
  try {
    const foundInventories = await Inventory.findAll({
      where: {
        category: {
          [Op.like]: `%${req.query.category ? req.query.category : ''}%`,
        },
      },
    })
    res.status(200).json(foundInventories)
  } catch (error) {
    res.status(500).json(error)
  }
})

inventories.get('/:category', async (req, res) => {
  try {
    const foundInventories = await Inventory.findAll({
      where: { category: req.params.category },
    })
    res.status(200).json(foundInventories)
  } catch (error) {
    res.status(500).json(error)
  }
})
// //

module.exports = inventories
