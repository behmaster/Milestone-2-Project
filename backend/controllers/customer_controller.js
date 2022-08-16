//DEPENDENCIES
const customer = require('express').Router();
const db = require('../models');
const { Customer, Inventory, Review, Transaction } = db;
const { Op } = require('sequelize');

//FIND ALL CUSTOMER IDS
customer.get('/', async (req, res) => {});
//FIND A SPECIFIC CUSTOMER ID
customer.get('/:customer_id', async (req, res) => {});

//CREATE A CUSTOMER ID
customer.post('/', async (req, res) => {});

//UPDATE A CUSTOMER ID
customer.put('/:id', async (req, res) => {});
// DELETE A CUSTOMER ID

//EXPORT A CUSTOMER ID
