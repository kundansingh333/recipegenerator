


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Chatbot from './components/Chatbot';
import Home from './components/Home';

function App() {
  // Dark mode toggle
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // 🥘 Recipe States lifted up here
  const [allRecipes, setAllRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [nextRecipe, setNextRecipe] = useState(null);

  // Fetch recipes only once
  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        setAllRecipes(data.recipes);
        const first = getRandomRecipe(data.recipes);
        const second = getRandomRecipe(data.recipes);
        setCurrentRecipe(first);
        setNextRecipe(second);
      });
  }, []);

  // Rotate recipe every 30 seconds
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

  return (
    <BrowserRouter>
      <div className={`${darkMode ? 'dark bg-[#052e14] text-[#dcfce8]' : 'bg-[#f0fdf5] text-[#14532c]'} flex flex-col h-screen`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                currentRecipe={currentRecipe}
                nextRecipe={nextRecipe}
                allRecipes={allRecipes}
                setCurrentRecipe={setCurrentRecipe}
                setNextRecipe={setNextRecipe}
              />
            }
          />
          <Route path="/chatbot" element={<Chatbot darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;