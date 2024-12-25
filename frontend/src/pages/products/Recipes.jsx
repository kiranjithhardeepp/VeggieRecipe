import React, { useEffect, useState } from "react";
import Card from "../../components/Card"; // Import the Card component

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  console.log('recipes: ', recipes);
  // Fetch data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/getAllItems")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {recipes.map((recipe) => (
        <Card
          key={recipe._id}
          id={recipe._id}
          name={recipe.name}
          image={`http://localhost:5000/images/` + recipe.image} // Pass the static image URL here
        />
      ))}
    </div>
  );
};

export default Recipes;
