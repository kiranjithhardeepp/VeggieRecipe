import React, { useState } from "react";

const Card = ({ name, image }) => {
  const [showImage, setShowImage] = useState(true); // State to toggle image visibility

  const handleImageToggle = () => {
    setShowImage(!showImage); // Toggle image visibility
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md w-72 p-4 text-center bg-blue-500 hover:bg-blue-400 transition-all duration-300">
      {/* Button to toggle image visibility */}
      <button
        onClick={handleImageToggle}
        className="mb-4 px-4 py-2 text-white bg-red-500 rounded-lg"
      >
        {showImage ? "Remove Image" : "Add Image"}
      </button>

      {/* Show or hide the image based on the state */}
      {showImage && (
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300"; // Fallback image
          }}
        />
      )}

      <h3 className="text-lg font-semibold text-white">{name}</h3>
    </div>
  );
};

export default Card;
