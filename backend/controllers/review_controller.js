//DEPENDENCIES
const review = require('express').Router();
const db = require('../models');
const { Review } = db;
const { Op } = require('sequelize');
// const { INTEGER } = require('sequelize');

// //FIND ALL CUSTOMER REVIEWS

review.get('/', async (req, res) => {
	let result = String(req.query.rating_result);
	console.log(result);
	try {
		const foundReview = await Review.findAll({
			//   where: {
			//         rating_result: {
			//       [Op.like]: `%${req.query.rating_result ? req.query.rating_result : ''}%`,
			//     },
			//   },
		});
		res.status(200).json(foundReview);
	} catch (error) {
		res.status(500).json(error);
	}
});

// review.get('/', async (req, res) => {});

// //FIND A SPECIFIC CUSTOMER REVIEW
// review.get('/:customer_id', async (req, res) => {});

// //CREATE A REVIEW
// review.post('/', async (req, res) => {});

// //UPDATE A REVIEW
// review.put('/:id', async (req, res) => {});

// // DELETE A REVIEW (SOUNDS SKETCH)
// review.delete('/:id', async (req, res) => {});

// //EXPORT THE REVIEW
module.exports = review;
