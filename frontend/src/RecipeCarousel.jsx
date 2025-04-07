

//----------------- main




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeCarousel({ onRecipeClick }) {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [nextRecipe, setNextRecipe] = useState(null);
  const [allRecipes, setAllRecipes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')   //recipes
      .then(res => res.json())
      .then(data => {
        setAllRecipes(data.recipes);
        const first = getRandomRecipe(data.recipes);
        const second = getRandomRecipe(data.recipes);
        setCurrentRecipe(first);
        setNextRecipe(second);
      });
  }, []);

  useEffect(() => {
    if (!nextRecipe || allRecipes.length === 0) return;

    const interval = setInterval(() => {
      setCurrentRecipe(nextRecipe);
      const newNext = getRandomRecipe(allRecipes);
      setNextRecipe(newNext);
    }, 30000);

    return () => clearInterval(interval);
  }, [nextRecipe, allRecipes]);

  const getRandomRecipe = (recipes) => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
  };
  console.log(currentRecipe)
  const handleCookThis = () => {
    if (currentRecipe?.name) {
      localStorage.setItem('selectedRecipeName', currentRecipe.name);
      navigate('/chatbot'); // make sure this matches your chatbot route
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center flex-col text-center p-4">
      {currentRecipe ? (
        <>
          <h2
            className="text-3xl font-bold mb-4 cursor-pointer hover:text-4xl"
            onClick={() => onRecipeClick(currentRecipe.name)}
          >
            {currentRecipe.name}
          </h2>
          <img
            src={currentRecipe.image}
            alt={currentRecipe.name}
            className="rounded-lg shadow-md max-w-[90%] max-h-[70vh] object-cover size-60"
          />
          <button
            onClick={handleCookThis}
            className="mt-4 px-6 py-3  bg-green-600 text-white rounded-3xl shadow hover:bg-green-700 transition"
          >
            Try This!
          </button>
        </>
      ) : (
        <p>Loading recipe...</p>
      )}
    </div>
  );
}

export default RecipeCarousel;
