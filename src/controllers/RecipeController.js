const Recipe = require('../models/Recipe');

exports.getAll = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, instructions } = req.body;
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { name, ingredients, instructions },
      { new: true, runValidators: true }
    );
    
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Receita não encontrada" });
    }
    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};