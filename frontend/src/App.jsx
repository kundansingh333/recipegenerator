














// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import RecipeImage from './RecipeImage';

// const salem = {
//     '50': '#f0fdf5',
//     '100': '#dcfce8',
//     '200': '#bbf7d1',
//     '300': '#86efad',
//     '400': '#4ade81',
//     '500': '#22c55f',
//     '600': '#16a34b',
//     '700': '#15803d',
//     '800': '#166534',
//     '900': '#14532c',
//     '950': '#052e14',
// };

// function App() {
//     const [query, setQuery] = useState('');
//     const [recipe, setRecipe] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
    // const [searchHistory, setSearchHistory] = useState([]);
    // const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    // const historyRef = useRef(null);
//     const [darkMode, setDarkMode] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);
//         setRecipe(null);
        // setSearchHistory((prevHistory) => [...prevHistory, query]);
        // setQuery('');
        // setIsHistoryOpen(false);
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/generate_recipe', { query });
//             setRecipe(response.data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

    // const handleHistoryClick = async (historyItem) => {
    //     setLoading(true);
    //     setError(null);
    //     setRecipe(null);
    //     setQuery(historyItem);
    //     setIsHistoryOpen(false);
    //     try {
    //         const response = await axios.post('http://127.0.0.1:5000/generate_recipe', { query: historyItem });
    //         setRecipe(response.data);
    //     } catch (err) {
    //         setError(err.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const clearHistory = () => {
    //     setSearchHistory([]);
    //     setIsHistoryOpen(false);
    //     setRecipe(null);
    // };

    // const deleteHistoryItem = (index) => {
    //     setSearchHistory((prevHistory) => prevHistory.filter((_, i) => i !== index));
    // };

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (historyRef.current && !historyRef.current.contains(event.target)) {
    //             setIsHistoryOpen(false);
    //         }
    //     }
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [historyRef]);

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);

//     return (
//         <div className={`p-8 flex flex-col h-screen ${darkMode ? 'dark bg-[#052e14] text-[#dcfce8]' : 'bg-[#f0fdf5] text-[#14532c]'}`}>
//             <div className="flex justify-between items-start mb-4">
//                 <h1 className={`text-3xl font-bold ${darkMode ? 'text-[#86efad]' : 'text-[#16a34b]'}`}>Recipe Generator</h1>
//                 <div className="flex items-center">
//                     <button
//                         onClick={() => setDarkMode(!darkMode)}
//                         className={`px-3 py-2 rounded-md mr-2 ${darkMode ? 'bg-[#15803d] hover:bg-[#166534]' : 'bg-[#4ade81] hover:bg-[#22c55f]'}`}
//                     >
//                         {darkMode ? 'Light' : 'Dark'}
//                     </button>
//                     <div ref={historyRef} className="relative">
//                         <button
//                             onClick={() => setIsHistoryOpen(!isHistoryOpen)}
//                             className={`px-3 py-2 rounded-md ${darkMode ? 'bg-[#15803d] hover:bg-[#166534]' : 'bg-[#4ade81] hover:bg-[#22c55f]'}`}
//                         >
//                             History
//                         </button>
//                         {isHistoryOpen && searchHistory.length > 0 && (
//                             <div className={`absolute right-0 mt-2 w-64 rounded-md shadow-lg overflow-hidden z-10 ${darkMode ? 'dark bg-[#15803d] text-[#dcfce8]' : 'bg-[#4ade81] text-[#052e14]'}`}>
//                                 <ul className="list-none p-0 m-0">
//                                     {searchHistory.map((item, index) => (
//                                         <li
//                                             key={index}
//                                             className={`flex justify-between items-center p-2 hover:${darkMode ? 'bg-[#166534]' : 'bg-[#22c55f]'} cursor-pointer`}
//                                         >
//                                             <span onClick={() => handleHistoryClick(item)} className="flex-grow">
//                                                 {item}
//                                             </span>
//                                             <button
//                                                 onClick={() => deleteHistoryItem(index)}
//                                                 className="text-red-500 hover:text-red-700 ml-2"
//                                             >
//                                                 X
//                                             </button>
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <button
//                                     onClick={clearHistory}
//                                     className={`w-full text-red-500 hover:${darkMode ? 'bg-[#166534]' : 'bg-[#22c55f]'} p-2 text-left`}
//                                 >
//                                     Clear All
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <div className="flex-grow overflow-auto mb-4">
//                 {loading && <p className={`mt-4 ${darkMode ? 'text-[#dcfce8]' : 'text-[#14532c]'}`}>Loading...</p>}
//                 {error && <p className="mt-4 text-red-600 dark:text-red-400">Error: {error}</p>}
//                 {recipe && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {Object.entries(recipe).map(([section, content]) => (
//                             <div key={section} className={`rounded-md shadow-md p-4 overflow-auto max-h-[50vh] ${darkMode ? 'bg-[#15803d] text-[#dcfce8]' : 'bg-[#4ade81] text-[#052e14]'}`}>
//                                 <h2 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-[#86efad]' : 'text-[#16a34b]'}`}>{section}</h2>
//                                 {Array.isArray(content) ? (
//                                     <ul className={`list-disc list-inside ${darkMode ? 'text-[#dcfce8]' : 'text-[#14532c]'}`}>
//                                       {/* <RecipeImage/> */}
//                                         {content.map((item, index) => (
//                                             <li key={index}>{item}</li>
                                            
//                                         ))}
//                                     </ul>
//                                 ) : (
//                                     <p className={`${darkMode ? 'text-[#dcfce8]' : 'text-[#14532c]'}`}>{content}</p>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
//                 <div className="flex w-full">
//                     <input
//                         type="text"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         placeholder="Enter recipe query"
//                         className={`border p-2 rounded-l-md w-full flex-grow focus:outline-none ${darkMode ? 'dark bg-[#15803d] dark:border-[#166534] dark:text-[#dcfce8]' : 'bg-[#4ade81] border-[#22c55f] text-[#052e14]'}`}
//                     />
//                     <button
//                         type="submit"
//                         className="bg-[#14532c] hover:bg-[#16a34b] text-[#C8B6A8] font-bold py-2 px-4 rounded-r-md"
//                     >
//                         Generate
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default App;











// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// // import Footer from './components/Footer';
// import SearchBar from "./components/SearchBar";

// function App() {
//     const [query, setQuery] = useState('');
//     const [recipe, setRecipe] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [searchHistory, setSearchHistory] = useState([]);
//     const [isHistoryOpen, setIsHistoryOpen] = useState(false);
//     const historyRef = useRef(null);
//     const [darkMode, setDarkMode] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);
//         setRecipe(null);
//         setSearchHistory((prevHistory) => [...prevHistory, query]);
//         setQuery('');
//         setIsHistoryOpen(false);
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/generate_recipe', { query });
//             setRecipe(response.data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleHistoryClick = async (historyItem) => {
//         setLoading(true);
//         setError(null);
//         setRecipe(null);
//         setQuery(historyItem);
//         setIsHistoryOpen(false);
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/generate_recipe', { query: historyItem });
//             setRecipe(response.data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const clearHistory = () => {
//         setSearchHistory([]);
//         setIsHistoryOpen(false);
//         setRecipe(null);
//     };

//     const deleteHistoryItem = (index) => {
//         setSearchHistory((prevHistory) => prevHistory.filter((_, i) => i !== index));
//     };

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (historyRef.current && !historyRef.current.contains(event.target)) {
//                 setIsHistoryOpen(false);
//             }
//         }
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [historyRef]);

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);

//     return (
//         <div className={`p-8 flex flex-col h-screen ${darkMode ? 'dark bg-[#052e14] text-[#dcfce8]' : 'bg-[#f0fdf5] text-[#14532c]'}`}>
//             <Navbar
//                 darkMode={darkMode}
//                 setDarkMode={setDarkMode}
//                 isHistoryOpen={isHistoryOpen}
//                 setIsHistoryOpen={setIsHistoryOpen}
//                 searchHistory={searchHistory}
//                 handleHistoryClick={handleHistoryClick}
//                 deleteHistoryItem={deleteHistoryItem}
//                 clearHistory={clearHistory}
//                 historyRef={historyRef}
//             />
//             <HeroSection
//                 query={query}
//                 loading={loading}
//                 error={error}
//                 recipe={recipe}
//                 darkMode={darkMode}
//             />
//             <SearchBar
//                 query={query}
//                 setQuery={setQuery}
//                 handleSubmit={handleSubmit}
//                 darkMode={darkMode}
//             />
//         </div>
//     );
// }

// export default App;









// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import SearchBar from "./components/SearchBar";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, Routes
// import About from './components/About'; // Import About component
// import Chatbot from './components/Chatbot'; // Import Chatbot component

// function App() {
//     const [query, setQuery] = useState('');
//     const [recipe, setRecipe] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [searchHistory, setSearchHistory] = useState([]);
//     const [isHistoryOpen, setIsHistoryOpen] = useState(false);
//     const historyRef = useRef(null);
//     const [darkMode, setDarkMode] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);
//         setRecipe(null);
//         setSearchHistory((prevHistory) => [...prevHistory, query]);
//         setQuery('');
//         setIsHistoryOpen(false);
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/generate_recipe', { query });
//             setRecipe(response.data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleHistoryClick = async (historyItem) => {
//         setLoading(true);
//         setError(null);
//         setRecipe(null);
//         setQuery(historyItem);
//         setIsHistoryOpen(false);
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/generate_recipe/', { query: historyItem });
//             setRecipe(response.data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const clearHistory = () => {
//         setSearchHistory([]);
//         setIsHistoryOpen(false);
//         setRecipe(null);
//     };

//     const deleteHistoryItem = (index) => {
//         setSearchHistory((prevHistory) => prevHistory.filter((_, i) => i !== index));
//     };

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (historyRef.current && !historyRef.current.contains(event.target)) {
//                 setIsHistoryOpen(false);
//             }
//         }
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [historyRef]);

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);

//     return (
//         <Router> {/* Wrap your App with Router */}
//             <div className={`p-8 flex flex-col h-screen ${darkMode ? 'dark bg-[#052e14] text-[#dcfce8]' : 'bg-[#f0fdf5] text-[#14532c]'}`}>
//                 <Navbar
//                     darkMode={darkMode}
//                     setDarkMode={setDarkMode}
//                     isHistoryOpen={isHistoryOpen}
//                     setIsHistoryOpen={setIsHistoryOpen}
//                     searchHistory={searchHistory}
//                     handleHistoryClick={handleHistoryClick}
//                     deleteHistoryItem={deleteHistoryItem}
//                     clearHistory={clearHistory}
//                     historyRef={historyRef}
//                 />
//                 <Routes> {/* Use Routes to define your routes */}
//                     <Route path="/" element={
//                         <>
//                             <HeroSection
//                                 query={query}
//                                 loading={loading}
//                                 error={error}
//                                 recipe={recipe}
//                                 darkMode={darkMode}
//                             />
//                             <SearchBar
//                                 query={query}
//                                 setQuery={setQuery}
//                                 handleSubmit={handleSubmit}
//                                 darkMode={darkMode}
//                             />
//                         </>
//                     } />
//                     <Route path="/about" element={<About darkMode={darkMode} />} />
//                     <Route path="/chatbot" element={<Chatbot darkMode={darkMode} />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;






// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import SearchBar from "./components/SearchBar";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from './components/About';
// import Chatbot from './components/Chatbot';
// import Home from './Home';

// function App() {
//   const [query, setQuery] = useState('');
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchHistory, setSearchHistory] = useState([]);
//   const [isHistoryOpen, setIsHistoryOpen] = useState(false);
//   const historyRef = useRef(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setRecipe(null);
//     setSearchHistory((prevHistory) => [...prevHistory, query]);
//     setQuery('');
//     setIsHistoryOpen(false);
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/generate_recipe', { query });
//       setRecipe(response.data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleHistoryClick = async (historyItem) => {
//     setLoading(true);
//     setError(null);
//     setRecipe(null);
//     setQuery(historyItem);
//     setIsHistoryOpen(false);
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/generate_recipe', { query: historyItem });
//       setRecipe(response.data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearHistory = () => {
//     setSearchHistory([]);
//     setIsHistoryOpen(false);
//     setRecipe(null);
//   };

//   const deleteHistoryItem = (index) => {
//     setSearchHistory((prevHistory) => prevHistory.filter((_, i) => i !== index));
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (historyRef.current && !historyRef.current.contains(event.target)) {
//         setIsHistoryOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [historyRef]);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <BrowserRouter>
//       <div className={`p-8 flex flex-col h-screen ${darkMode ? 'dark bg-[#052e14] text-[#dcfce8]' : 'bg-[#f0fdf5] text-[#14532c]'}`}>
//         <Navbar
//           darkMode={darkMode}
//           setDarkMode={setDarkMode}
//           isHistoryOpen={isHistoryOpen}
//           setIsHistoryOpen={setIsHistoryOpen}
//           searchHistory={searchHistory}
//           handleHistoryClick={handleHistoryClick}
//           deleteHistoryItem={deleteHistoryItem}
//           clearHistory={clearHistory}
//           historyRef={historyRef}
//         />
//         <Routes>
//           <Route path="/chatbot" element={
//             <>
//               <HeroSection
//                 query={query}
//                 loading={loading}
//                 error={error}
//                 recipe={recipe}
//                 darkMode={darkMode}
//               />
//               <SearchBar
//                 query={query}
//                 setQuery={setQuery}
//                 handleSubmit={handleSubmit}
//                 darkMode={darkMode}
//               />
//             </>
//           } />
//           <Route path="/" element={<Home darkMode={darkMode} />} />
//           <Route path="/about" element={<About darkMode={darkMode} />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;





// import React, { useState, useRef, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from './components/About';
// import Chatbot from './components/Chatbot';
// import Home from './Home';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [searchHistory, setSearchHistory] = useState([]);
//   const [isHistoryOpen, setIsHistoryOpen] = useState(false);
//   const historyRef = useRef(null);

//   const clearHistory = () => {
//     setSearchHistory([]);
//     setIsHistoryOpen(false);
//   };

//   const deleteHistoryItem = (index) => {
//     setSearchHistory((prevHistory) => prevHistory.filter((_, i) => i !== index));
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (historyRef.current && !historyRef.current.contains(event.target)) {
//         setIsHistoryOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [historyRef]);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <BrowserRouter>
//       <div className={`p-8 flex flex-col h-screen ${darkMode ? 'dark bg-[#052e14] text-[#dcfce8]' : 'bg-[#f0fdf5] text-[#14532c]'}`}>
//         <Navbar
//           darkMode={darkMode}
//           setDarkMode={setDarkMode}
//           isHistoryOpen={isHistoryOpen}
//           setIsHistoryOpen={setIsHistoryOpen}
//           searchHistory={searchHistory}
//           deleteHistoryItem={deleteHistoryItem}
//           clearHistory={clearHistory}
//           historyRef={historyRef}
//         />
//         <Routes>
//           <Route path="/chatbot" element={<Chatbot darkMode={darkMode} />} />
//           <Route path="/" element={<Home darkMode={darkMode} />} />
//           <Route path="/about" element={<About darkMode={darkMode} />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;





























// main



// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from './components/About';
// import Chatbot from './components/Chatbot';
// import Home from './components/Home';

// function App() {
//   // Initialize dark mode from localStorage (default to false)
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedMode = localStorage.getItem('darkMode');
//     return savedMode === 'true';
//   });

//   // Update dark mode and save preference
//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode);
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <BrowserRouter>
//       <div className={`${darkMode ? 'dark bg-[#052e14] text-[#dcfce8]' : 'bg-[#f0fdf5] text-[#14532c]'} flex flex-col h-screen`}>
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//         <Routes>
//           <Route path="/" element={<Home darkMode={darkMode} />} />
//           <Route path="/chatbot" element={<Chatbot darkMode={darkMode} />} />
//           <Route path="/about" element={<About darkMode={darkMode} />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



















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