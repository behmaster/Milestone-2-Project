// DEPENDENCIES
const express = require('express');
const { Client } = require('pg');
const app = express();
const { Sequelize } = require('sequelize');
const db = require('./models');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Now entering the Milestone Glasses API',
	});
});

 

// // CONTROLLERS
const customerController = require('./controllers/customer_controller');
app.use('/customer', customerController);

const inventoryController = require('./controllers/inventory_controller');
app.use('/inventory', inventoryController);

const reviewController = require('./controllers/review_controller');
app.use('/review', reviewController);

const categoryController = require('./controllers/category_controller')
app.use('/category', categoryController)


// const transactionController = require('./controllers/transaction_Controller');
// app.use('/transaction', transactionController);

app.get('*', (req, res) => {
  res.send('404')
})
// LISTEN
app.listen(process.env.PORT, () => {
	console.log(
		`Because you now have clear vision, you can now see that we are on port: ${process.env.PORT}`
	);
});
