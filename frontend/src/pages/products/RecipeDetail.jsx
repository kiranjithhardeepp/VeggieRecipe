import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RecipeDetail = () => {
  const location = useLocation();
  const { id } = location.state || {}; // Extract the ID from location state
  console.log("id: ", id);
  const [recipeDetails, setRecipeDetails] = useState(null); // State for recipe details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (id) {
      const fetchRecipeDetails = async () => {
        try {
          const response = await fetch(
            "http://localhost:5000/api/getSingleItem",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id }), // Send ID in request body
            }
          );

          if (!response.ok) {
            throw new Error(
              `Error ${response.status}: Failed to fetch recipe details.`
            );
          }

          const data = await response.json();
          console.log("data: ", data);
          setRecipeDetails(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchRecipeDetails();
    } else {
      setError("No ID provided in the request.");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!recipeDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No details available for this recipe.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center mb-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-green-600 mb-6">
          Recipe Details
        </h1>
        <p className="text-lg font-medium text-gray-700 mb-4">
          <span className="font-bold">Recipe Name:</span>{" "}
          {recipeDetails.name || "N/A"}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4">
          <span className="font-bold">Category:</span>{" "}
          {recipeDetails.category || "N/A"}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4">
          <span className="font-bold">Ingredients:</span>{" "}
          {recipeDetails.ingredients?.join(", ") || "N/A"}
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4">
          <span className="font-bold">Preparation Time:</span>{" "}
          {recipeDetails.preparationTime || "N/A"} minutes
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4">
          <span className="font-bold">Cook Time:</span>{" "}
          {recipeDetails.cookTime || "N/A"} minutes
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4">
          <span className="font-bold">Description:</span>{" "}
          {recipeDetails.description || "N/A"}
        </p>
        {recipeDetails.image && (
          <img
            src={`http://localhost:5000/images/` + recipeDetails.image}
            alt={`Image of ${recipeDetails.name}`}
            className="w-full h-auto rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
