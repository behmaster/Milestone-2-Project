//DEPENDENCIES
const inventory = require('express').Router();
const db = require('../models');
const { Customer, Inventory, Review, Transaction } = db;
const { Op } = require('sequelize');

//FIND ALL CUSTOMER IDS
inventory.get('/', async (req, res) => {});
//FIND A SPECIFIC CUSTOMER ID
inventory.get('/:customer_id', async (req, res) => {});

//CREATE A CUSTOMER ID
inventory.post('/', async (req, res) => {});

//UPDATE A CUSTOMER ID
inventory.put('/:id', async (req, res) => {});

// DELETE A CUSTOMER ID
inventory.delete('/:id', async (req, res) => {});

//EXPORT A CUSTOMER ID
module.exports = inventory;
