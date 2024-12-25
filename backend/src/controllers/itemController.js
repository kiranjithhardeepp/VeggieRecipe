const Recipe = require("../model/recipeModel");

const getAllItems = async (req, res) => {
  const result = await Recipe.find().sort({ createdAt: -1 });
  res.status(200).json(result);
};

const getSearchedItems = async (req, res) => {
  const { q } = req.query;
  console.log(q);
  try {
    let recipes;
    if (q) {
      recipes = await Recipe.find({ name: { $regex: q, $options: "i" } });
    }
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "No items found" });
  }
};

const getSingleItem = async (req, res) => {
  const { id } = req.body;
  console.log("Received ID:", id); 

  try {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      console.log("No recipe found for the provided ID"); 
      return res.status(404).json({ message: "No items found" });
    }

    console.log("Recipe found:", recipe); 
    res.json(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error); 
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllItems,
  getSearchedItems,
  getSingleItem,
};
