const Recipe = require('../models/Recipe');

exports.create = async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  try {
    const newRecipe = new Recipe({ name, ingredients, instructions });
    await newRecipe.save();
    
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
