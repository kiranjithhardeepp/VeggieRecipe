const express = require("express");
const multer = require("multer");
const Recipe = require("../model/recipeModel");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Add authMiddleware to protect the route
router.post(
  "/recipes",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        name,
        recipeType,
        ingredients,
        preparationTime,
        cookTime,
        description,
      } = req.body;
      console.log("req.file: ", req.file);
      // console.log("file: ", image);
      const recipe = new Recipe({
        name,
        category: recipeType,
        ingredients: ingredients
          .split("\n")
          .map((ingredient) => ingredient.trim()),
        preparationTime,
        cookTime,
        description,
        image: req.file ? req.file.filename : null,
        user: req.user.id, // Assuming authMiddleware adds user to the request
      });

      await recipe.save();
      res.status(201).json({ message: "Recipe created successfully", recipe });
    } catch (err) {
      console.error(err);
      res
        .status(400)
        .json({ message: "Error creating recipe", error: err.message });
    }
  }
);

module.exports = router;
