const express = require('express');
const router = express.Router();

const RecipeController = require('../controllers/RecipeController');

router.get('/recipes', RecipeController.getAll);
router.post('/recipes/create', RecipeController.create);
router.put('/recipes/update/:id', RecipeController.update);
router.delete('/recipes/destroy/:id', RecipeController.destroy);

module.exports = router;