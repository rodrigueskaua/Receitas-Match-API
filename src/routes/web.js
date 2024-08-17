const express = require('express');
const router = express.Router();

const RecipeController = require('../controllers/RecipeController');
const CategoryController = require('../controllers/CategoryController');

router.get('/recipes', RecipeController.getAll);
router.post('/recipes/create', RecipeController.create);
router.put('/recipes/update/:id', RecipeController.update);
router.delete('/recipes/destroy/:id', RecipeController.destroy);

router.get('/categories', CategoryController.getAll);
router.post('/categories/create', CategoryController.create);
router.put('/categories/update/:id', CategoryController.update);
router.delete('/categories/destroy/:id', CategoryController.destroy);

module.exports = router;