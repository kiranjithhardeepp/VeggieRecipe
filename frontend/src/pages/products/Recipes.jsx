import React, { useEffect, useState } from "react";
import Card from "../../components/Card"; // Import the Card component

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const imageUrl =
    "https://www.istockphoto.com/search/2/image-film?phrase=good+food"; // Your static image URL

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
          name={recipe.name}
          image={imageUrl}  // Pass the static image URL here
        />
      ))}
    </div>
  );
};

export default Recipes;
