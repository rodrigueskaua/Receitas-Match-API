const express = require('express');
const router = express.Router();

const RecipeController = require('../controllers/RecipeController');

router.post('/recipes/create', RecipeController.create);
router.get('/recipes', RecipeController.getAll);

module.exports = router;
