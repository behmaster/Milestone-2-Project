//DEPENDENCIES
const transaction = require('express').Router();
const db = require('../models');
const { Transaction, Customer, Inventory, Review } = db;
const { Op } = require('sequelize');

//FIND ALL CUSTOMER IDS
transaction.get('/', async (req, res) => {});
//FIND A SPECIFIC CUSTOMER ID
transaction.get('/:customer_id', async (req, res) => {});

//CREATE A CUSTOMER ID
transaction.post('/', async (req, res) => {});

//UPDATE A CUSTOMER ID
transaction.put('/:id', async (req, res) => {});

// DELETE A CUSTOMER ID
transaction.delete('/:id', async (req, res) => {});

//EXPORT A CUSTOMER ID
module.exports = transaction;
