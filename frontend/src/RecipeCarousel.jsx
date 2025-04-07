// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function RecipeCarousel({ onRecipeClick }) {
//   const [currentRecipe, setCurrentRecipe] = useState(null);
//   const [nextRecipe, setNextRecipe] = useState(null);
//   const [allRecipes, setAllRecipes] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('https://dummyjson.com/recipes')
//       .then(res => res.json())
//       .then(data => {
//         setAllRecipes(data.recipes);
//         const first = getRandomRecipe(data.recipes);
//         const second = getRandomRecipe(data.recipes);
//         setCurrentRecipe(first);
//         setNextRecipe(second);
//       });
//   }, []);

//   useEffect(() => {
//     if (!nextRecipe || allRecipes.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentRecipe(nextRecipe);
//       const newNext = getRandomRecipe(allRecipes);
//       setNextRecipe(newNext);
//     }, 30000);

//     return () => clearInterval(interval);
//   }, [nextRecipe, allRecipes]);

//   const getRandomRecipe = (recipes) => {
//     const randomIndex = Math.floor(Math.random() * recipes.length);
//     return recipes[randomIndex];
//   };

//   const handleCookThis = () => {
//     if (currentRecipe?.name) {
//       localStorage.setItem('selectedRecipeName', currentRecipe.name);
//       navigate('/chatbot'); // make sure this matches your chatbot route
//     }
//   };

//   return (
//     <div className="w-full h-full flex items-center justify-center flex-col text-center p-4">
//       {currentRecipe ? (
//         <>
//           <h2
//             className="text-3xl font-bold mb-4 cursor-pointer hover:text-4xl"
//             onClick={() => onRecipeClick(currentRecipe.name)}
//           >
//             {currentRecipe.name}
//           </h2>
//           <img
//             src={currentRecipe.image}
//             alt={currentRecipe.name}
//             className="rounded-lg shadow-md max-w-[90%] max-h-[70vh] object-cover size-60"
//           />
//           <button
//             onClick={handleCookThis}
//             className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//           >
//             Cook This!
//           </button>
//         </>
//       ) : (
//         <p>Loading recipe...</p>
//       )}
//     </div>
//   );
// }

// export default RecipeCarousel;










// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function RecipeCarousel({ onRecipeClick }) {
//   const [currentRecipe, setCurrentRecipe] = useState(null);
//   const [nextRecipe, setNextRecipe] = useState(null);
//   const [allRecipes, setAllRecipes] = useState([]);

//   const navigate = useNavigate();

//   // Load from localStorage or fetch if not available
//   useEffect(() => {
//     const storedRecipes = localStorage.getItem('allRecipes');
//     const storedCurrent = localStorage.getItem('currentRecipe');
//     const storedNext = localStorage.getItem('nextRecipe');

//     if (storedRecipes && storedCurrent && storedNext) {
//       setAllRecipes(JSON.parse(storedRecipes));
//       setCurrentRecipe(JSON.parse(storedCurrent));
//       setNextRecipe(JSON.parse(storedNext));
//     } else {
//       fetch('https://dummyjson.com/recipes')
//         .then(res => res.json())
//         .then(data => {
//           setAllRecipes(data.recipes);
//           localStorage.setItem('allRecipes', JSON.stringify(data.recipes));

//           const first = getRandomRecipe(data.recipes);
//           const second = getRandomRecipe(data.recipes);

//           setCurrentRecipe(first);
//           setNextRecipe(second);

//           localStorage.setItem('currentRecipe', JSON.stringify(first));
//           localStorage.setItem('nextRecipe', JSON.stringify(second));
//         });
//     }
//   }, []);

//   // Update every 30 seconds
//   useEffect(() => {
//     if (!nextRecipe || allRecipes.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentRecipe(nextRecipe);
//       localStorage.setItem('currentRecipe', JSON.stringify(nextRecipe));

//       const newNext = getRandomRecipe(allRecipes);
//       setNextRecipe(newNext);
//       localStorage.setItem('nextRecipe', JSON.stringify(newNext));
//     }, 30000);

//     return () => clearInterval(interval);
//   }, [nextRecipe, allRecipes]);

//   const getRandomRecipe = (recipes) => {
//     const randomIndex = Math.floor(Math.random() * recipes.length);
//     return recipes[randomIndex];
//   };
//   console.log("Current Recipe Object:", currentRecipe.image);

//   const handleCookThis = () => {
//     if (currentRecipe?.name) {
//       localStorage.setItem('selectedRecipeName', currentRecipe.name);
//       navigate('/chatbot');
//     }
//   };

//   return (
//     <div className="w-full h-full flex items-center justify-center flex-col text-center p-4">
//       {currentRecipe ? (
//         <>
//           <h2
//             className="text-3xl font-bold mb-4 cursor-pointer hover:text-4xl"
//             onClick={() => onRecipeClick(currentRecipe.name)}
//           >
//             {currentRecipe.name}
//           </h2>
//           <img
//             src={currentRecipe.image}
//             alt={currentRecipe.name}
//             className="rounded-lg shadow-md max-w-[90%] max-h-[70vh] object-cover size-60"
//           />
//           <button
//             onClick={handleCookThis}
//             className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//           >
//             Cook This!
//           </button>
//         </>
//       ) : (
//         <p>Loading recipe...</p>
//       )}
//     </div>
//   );
// }

// export default RecipeCarousel;





















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function RecipeCarousel({ onRecipeClick }) {
//   const [currentRecipe, setCurrentRecipe] = useState(null);
//   const [nextRecipe, setNextRecipe] = useState(null);
//   const [allRecipes, setAllRecipes] = useState([]);

//   const navigate = useNavigate();

//   // Get a valid recipe with image URL
//   const getRandomRecipe = (recipes) => {
//     const validRecipes = recipes.filter(
//       (recipe) =>
//         recipe.image &&
//         recipe.image.startsWith('http') &&
//         !recipe.image.includes('dummyjson.com')
//     );
//     const randomIndex = Math.floor(Math.random() * validRecipes.length);
//     return validRecipes[randomIndex];
//   };

//   // Load from localStorage or fetch if not available
//   useEffect(() => {
//     const storedRecipes = localStorage.getItem('allRecipes');
//     const storedCurrent = localStorage.getItem('currentRecipe');
//     const storedNext = localStorage.getItem('nextRecipe');

//     if (storedRecipes && storedCurrent && storedNext) {
//       const recipes = JSON.parse(storedRecipes);
//       setAllRecipes(recipes);
//       setCurrentRecipe(JSON.parse(storedCurrent));
//       setNextRecipe(JSON.parse(storedNext));
//     } else {
//       fetch('https://dummyjson.com/recipes')
//         .then((res) => res.json())
//         .then((data) => {
//           const validRecipes = data.recipes.filter(
//             (r) =>
//               r.image &&
//               r.image.startsWith('http') &&
//               !r.image.includes('dummyjson.com')
//           );

//           setAllRecipes(validRecipes);
//           localStorage.setItem('allRecipes', JSON.stringify(validRecipes));

//           const first = getRandomRecipe(validRecipes);
//           const second = getRandomRecipe(validRecipes);

//           setCurrentRecipe(first);
//           setNextRecipe(second);

//           localStorage.setItem('currentRecipe', JSON.stringify(first));
//           localStorage.setItem('nextRecipe', JSON.stringify(second));
//         });
//     }
//   }, []);

//   // Rotate every 30 seconds
//   useEffect(() => {
//     if (!nextRecipe || allRecipes.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentRecipe(nextRecipe);
//       localStorage.setItem('currentRecipe', JSON.stringify(nextRecipe));

//       const newNext = getRandomRecipe(allRecipes);
//       setNextRecipe(newNext);
//       localStorage.setItem('nextRecipe', JSON.stringify(newNext));
//     }, 30000);

//     return () => clearInterval(interval);
//   }, [nextRecipe, allRecipes]);

//   const handleCookThis = () => {
//     if (currentRecipe?.name) {
//       localStorage.setItem('selectedRecipeName', currentRecipe.name);
//       navigate('/chatbot');
//     }
//   };

//   return (
//     <div className="w-full h-full flex items-center justify-center flex-col text-center p-4">
//       {currentRecipe ? (
//         <>
//           <h2
//             className="text-3xl font-bold mb-4 cursor-pointer hover:text-4xl"
//             onClick={() => onRecipeClick(currentRecipe.name)}
//           >
//             {currentRecipe.name}
//           </h2>
//           <img
//             src={currentRecipe.image}
//             alt={currentRecipe.name}
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src =
//                 'https://via.placeholder.com/300x200?text=No+Image+Available';
//             }}
//             className="rounded-lg shadow-md max-w-[90%] max-h-[70vh] object-cover size-60"
//           />
//           <button
//             onClick={handleCookThis}
//             className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//           >
//             Cook This!
//           </button>
//         </>
//       ) : (
//         <p>Loading recipe...</p>
//       )}
//     </div>
//   );
// }

// export default RecipeCarousel;










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
