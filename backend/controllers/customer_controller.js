//DEPENDENCIES
const customers = require('express').Router();
const db = require('../models');
const { Customer } = db;
const { Op } = require('sequelize');
//FIND ALL CUSTOMER IDS
customers.get('/', async (req, res) => {
	try {
		const foundCustomers = await Customer.findAll({
			where: {
				firstName: {
					[Op.like]: `%${req.query.firstName ? req.query.firstName : ''}%`,
				},
			},
		});
		res.status(200).json(foundCustomers);
	} catch (error) {
		res.status(500).json(error);
	}
});

//EXPORT A CUSTOMER ID
module.exports = customers;
