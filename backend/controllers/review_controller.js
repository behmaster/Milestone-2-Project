//DEPENDENCIES
const review = require('express').Router();
const db = require('../models');
const { Review, Customer, Inventory, Transaction } = db;
const { Op } = require('sequelize');

//FIND ALL CUSTOMER REVIEWS
review.get('/', async (req, res) => {});

//FIND A SPECIFIC CUSTOMER REVIEW
review.get('/:customer_id', async (req, res) => {});

//CREATE A REVIEW
review.post('/', async (req, res) => {});

//UPDATE A REVIEW
review.put('/:id', async (req, res) => {});

// DELETE A REVIEW (SOUNDS SKETCH)
review.delete('/:id', async (req, res) => {});

//EXPORT THE REVIEW
module.exports = review;
