import React from 'react';

function RecipeImage({ recipeImage }) {
  if (!recipeImage) {
    return null; // Don't render if no image
  }

  return (
    <div className="mt-4">
      <img src={recipeImage} alt="Recipe" className="max-w-full rounded-md shadow-md" />
    </div>
  );
}

export default RecipeImage;