import React, { useState } from "react";
import "./Recipe.css";

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    recipeType: "",
    ingredients: "",
    preparationTime: "",
    cookTime: "",
    description: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    console.log('token: ', token);

    const formData = new FormData();
    formData.append("name", recipeData.name);
    formData.append("recipeType", recipeData.recipeType);
    formData.append("ingredients", recipeData.ingredients);
    formData.append("preparationTime", recipeData.preparationTime);
    formData.append("cookTime", recipeData.cookTime);
    formData.append("description", recipeData.description);
    if (recipeData.image) {
      formData.append("image", recipeData.image);
    }

    try {
      const response = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add recipe");
      }

      console.log("Recipe added successfully", data);
      // Reset form or navigate to another page
    } catch (error) {
      console.error("Error adding recipe:", error.message);
      // Handle error (show message to user, etc.)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipeData.name}
        onChange={(e) => setRecipeData({ ...recipeData, name: e.target.value })}
      />
      <select
        value={recipeData.recipeType}
        onChange={(e) =>
          setRecipeData({ ...recipeData, recipeType: e.target.value })
        }
      >
        <option value="">Select Recipe Type</option>
        <option value="entrees">Entrees</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="drinks">Drinks</option>
        <option value="sides">Sides</option>
        <option value="desserts">Desserts</option>
      </select>
      <textarea
        placeholder="Ingredients (List each ingredient on a new line)"
        value={recipeData.ingredients}
        onChange={(e) =>
          setRecipeData({ ...recipeData, ingredients: e.target.value })
        }
      />
      <textarea
        placeholder="How to make the recipe"
        value={recipeData.description}
        onChange={(e) =>
          setRecipeData({ ...recipeData, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Preparation Time (e.g., 20 minutes)"
        value={recipeData.preparationTime}
        onChange={(e) =>
          setRecipeData({ ...recipeData, preparationTime: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Cook Time (e.g., 30 minutes)"
        value={recipeData.cookTime}
        onChange={(e) =>
          setRecipeData({ ...recipeData, cookTime: e.target.value })
        }
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setRecipeData({ ...recipeData, image: e.target.files[0] })
        }
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
