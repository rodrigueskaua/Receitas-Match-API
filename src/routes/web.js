const express = require('express');
const router = express.Router();

const RecipeController = require('../controllers/RecipeController');

router.get('/recipes', RecipeController.getAll);
router.post('/recipes/create', RecipeController.create);
router.put('/recipes/update/:id', RecipeController.update);

module.exports = router;