import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, image, id }) => {
  const [showImage, setShowImage] = useState(true); // State to toggle image visibility
  const navigate = useNavigate(); // Hook for navigation

  const handleCardClick = () => {
    navigate("/recipeDetail", { state: { id, name } }); // Navigate to /recipeDetail with data
  };

  return (
    <div
      className="border border-gray-300 rounded-lg shadow-md w-72 p-4 text-center bg-white-500 hover:bg-green-400 transition-all duration-300 cursor-pointer"
      onClick={handleCardClick} // Navigate on card click
    >
      {showImage && (
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
          onError={(e) => {
            e.target.src =
              "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg"; // Fallback image
          }}
        />
      )}

      <h3 className="text-lg font-semibold text-black">{name}</h3>
    </div>
  );
};

export default Card;
