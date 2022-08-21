//DEPENDENCIES
const review = require('express').Router();
const db = require('../models');
const { Review } = db;
const { Op } = require('sequelize');

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

//EXPORT THE REVIEW
module.exports = review;
