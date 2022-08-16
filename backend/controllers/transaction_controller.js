//DEPENDENCIES
const transaction = require('express').Router();
const db = require('../models');
const { Transaction, Customer, Inventory, Review } = db;
const { Op } = require('sequelize');

//ALL TRANSACTIONS
transaction.get('/', async (req, res) => {});

//FIND A SPECIFIC CUSTOMER TRANSACTION
transaction.get('/:customer_id', async (req, res) => {});

//CREATE A NEW TRANSACTION
transaction.post('/', async (req, res) => {});

//UPDATE A CUSTOMER'S TRANSACTION
transaction.put('/:id', async (req, res) => {});

// DELETE A TRANSACTION
transaction.delete('/:id', async (req, res) => {});

//EXPORT THE TRANSACTION
module.exports = transaction;
