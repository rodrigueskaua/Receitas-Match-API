const express = require('express');
const router = express.Router();

const RecipeController = require('../controllers/RecipeController');

router.post('/recipes/create', RecipeController.create);

module.exports = router;
