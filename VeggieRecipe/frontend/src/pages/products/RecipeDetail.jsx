import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddRecipe from "./AddRecipe";

const RecipeDetail = () => {
  const { id } = useParams();  // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`http://localhost:5000/api/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-detail">
      <img src={recipe.imageUrl} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>{recipe.recipeType}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.split("\n").map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>How to Make</h3>
      <p>{recipe.description}</p>
      <p>Preparation Time: {recipe.preparationTime}</p>
      <p>Cook Time: {recipe.cookTime}</p>
    </div>
  );
};

export default RecipeDetail;
