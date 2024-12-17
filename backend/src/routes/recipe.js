// const express = require('express');
// const router = express.Router();
// const Recipe = require('../models/recipeModel'); // Mongoose model for recipes

// // POST /api/recipes
// router.post('/', async (req, res) => {
//   try {
//     const { name, category, ingredients, instructions } = req.body;

//     const newRecipe = new Recipe({
//       name,
//       category,
//       ingredients,
//       instructions,
//     });

//     const savedRecipe = await newRecipe.save();
//     res.status(201).json(savedRecipe);
//   } catch (err) {
//     res.status(500).json({ message: 'Error saving recipe', error: err.message });
//   }
// });

// module.exports = router;
