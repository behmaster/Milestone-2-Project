//DEPENDENCIES
const inventory = require('express').Router();
const db = require('../models');
const { Inventory, Customer, Review, Transaction } = db;
const { Op } = require('sequelize');

//Get Inventory IDs
inventory.get('/', async (req, res) => {});

//FIND A SPECIFIC ITEM
inventory.get('/:customer_id', async (req, res) => {});

//CREATE AN ITEM IN THE INVENTORY
inventory.post('/', async (req, res) => {});

//UPDATE AN ITEM IN THE INVENTORY
inventory.put('/:id', async (req, res) => {});

// DELETE AN ITEM
inventory.delete('/:id', async (req, res) => {});

//EXPORT AN ITEM
module.exports = inventory;
