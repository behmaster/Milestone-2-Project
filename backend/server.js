// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequalize } = require('sequalize');

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

// CONTROLLERS
const customerController = require('./controllers/customer_controller');
app.use('/customer', customerController);

const inventoryController = require('./controllers/inventory_controller');
app.use('/inventory', inventoryController);

const reviewController = require('./controllers/review_controller');
app.use('/review', reviewController);

const transactionController = require('./controllers/transactionController');
app.use('/transaction', transactionController);

// LISTEN
app.listen(process.env.PORT, () => {
	console.log(
		'Because you now have clear vision, you can now see that we are on port: ${process.env.PORT}'
	);
});
