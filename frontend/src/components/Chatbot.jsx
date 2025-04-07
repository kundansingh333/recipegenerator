

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import LoadingSpinner from './LoadingSpinner';

// function Chatbot({ darkMode }) {
//   const [query, setQuery] = useState('');
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchHistory, setSearchHistory] = useState([]);
//   const [isHistoryOpen, setIsHistoryOpen] = useState(false);
//   const historyRef = useRef(null);

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

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

//   return (
//     <div className={`p-8 flex flex-col h-screen ${darkMode ? 'dark bg-[#052e14] text-[#dcfce8]' : 'bg-[#f0fdf5] text-[#14532c]'}`}>
//       <div className="flex justify-between items-start mb-4">
//         <h2 className={`text-2xl font-semibold ${darkMode ? 'text-[#86efad]' : 'text-[#16a34b]'}`}>
//           {recipe && recipe.RecipeName ? recipe.RecipeName : 'Recipe'}
//         </h2>
//         <div ref={historyRef} className="relative">
//           <button
//             onClick={() => setIsHistoryOpen(!isHistoryOpen)}
//             className={`px-3 py-2 rounded-md ${darkMode ? 'bg-[#15803d] hover:bg-[#166534]' : 'bg-[#4ade81] hover:bg-[#22c55f]'}`}
//           >
//             History
//           </button>
//           {isHistoryOpen && searchHistory.length > 0 && (
//             <div className={`absolute right-0 mt-2 w-64 rounded-md shadow-lg overflow-hidden z-10 ${darkMode ? 'dark bg-[#15803d] text-[#dcfce8]' : 'bg-[#4ade81] text-[#052e14]'}`}>
//               <ul className="list-none p-0 m-0">
//                 {searchHistory.map((item, index) => (
//                   <li
//                     key={index}
//                     className={`flex justify-between items-center p-2 hover:${darkMode ? 'bg-[#166534]' : 'bg-[#22c55f]'} cursor-pointer`}
//                   >
//                     <span onClick={() => handleHistoryClick(item)} className="flex-grow">
//                       {item}
//                     </span>
//                     <button
//                       onClick={() => deleteHistoryItem(index)}
//                       className="text-red-500 hover:text-red-700 ml-2"
//                     >
//                       X
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 onClick={clearHistory}
//                 className={`w-full text-red-500 hover:${darkMode ? 'bg-[#166534]' : 'bg-[#22c55f]'} p-2 text-left`}
//               >
//                 Clear All
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="flex-grow overflow-auto mb-4">
//         {loading && <LoadingSpinner darkMode={darkMode} />}
//         {error && (
//           <p className={`mt-4 text-red-600 ${darkMode ? 'dark:text-red-400' : 'text-red-500'}`}>
//             Error: {error}
//             <br />
//             Please ensure the backend server is running.
//           </p>
//         )}
//         {recipe && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="col-span-1">
//               {recipe.Equipment && (
//                 <div className={`rounded-md shadow-md p-4 overflow-auto max-h-[50vh] ${darkMode ? 'bg-[#15803d] text-[#dcfce8]' : 'bg-[#4ade81] text-[#052e14]'}`}>
//                   <h2 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-[#86efad]' : 'text-[#16a34b]'}`}>Equipment</h2>
//                   <ul className={`list-disc list-inside ${darkMode ? 'text-[#dcfce8]' : 'text-[#14532c]'}`}>
//                     {recipe.Equipment.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//             <div className="col-span-1">
//               {recipe.Ingredients && (
//                 <div className={`rounded-md shadow-md p-4 overflow-auto max-h-[50vh] ${darkMode ? 'bg-[#15803d] text-[#dcfce8]' : 'bg-[#4ade81] text-[#052e14]'}`}>
//                   <h2 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-[#86efad]' : 'text-[#16a34b]'}`}>Ingredients</h2>
//                   <ul className={`list-disc list-inside ${darkMode ? 'text-[#dcfce8]' : 'text-[#14532c]'}`}>
//                     {recipe.Ingredients.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//             <div className="col-span-2">
//               {recipe.Instructions && (
//                 <div className={`rounded-md shadow-md p-4 overflow-auto max-h-[50vh] ${darkMode ? 'bg-[#15803d] text-[#dcfce8]' : 'bg-[#4ade81] text-[#052e14]'}`}>
//                   <h2 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-[#86efad]' : 'text-[#16a34b]'}`}>Instructions</h2>
//                   <p className={`${darkMode ? 'text-[#dcfce8]' : 'text-[#14532c]'}`}>{recipe.Instructions}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>

//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
//         <div className="flex w-full">
//           <input
//             type="text"
//             value={query}
//             onChange={handleInputChange}
//             placeholder="Enter recipe query"
//             className={`border p-2 rounded-l-md w-full flex-grow focus:outline-none ${darkMode ? 'dark bg-[#15803d] dark:border-[#166534] dark:text-[#dcfce8]' : 'bg-[#4ade81] border-[#22c55f] text-[#052e14]'}`}
//           />
//           <button
//             type="submit"
//             className="bg-[#14532c] hover:bg-[#16a34b] text-[#C8B6A8] font-bold py-2 px-4 rounded-r-md"
//           >
//             Generate
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Chatbot;

















import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import abusiveWords from '../data/abusiveWords.json';
import humanNames from '../data/humanNames.json';

const Chatbot = forwardRef(({ darkMode }, ref) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });
  const [submitted, setSubmitted] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved).length > 0 : false;
  });
  const bottomRef = useRef(null);
  const formRef = useRef(null);

  // 🔥 Allow external component to trigger query and auto-submit
  useImperativeHandle(ref, () => ({
    triggerSearchFromOutside(input) {
      setQuery(input);
      setSubmitted(true);
      setTimeout(() => {
        formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }, 200);
    },
  }));

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // ✅ NEW: Auto-trigger query from localStorage if exists
  useEffect(() => {
    const savedRecipeName = localStorage.getItem('selectedRecipeName');
    if (savedRecipeName) {
      setQuery(savedRecipeName);
      setSubmitted(true);
      setTimeout(() => {
        formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        localStorage.removeItem('selectedRecipeName');
      }, 200);
    }
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const lowerQuery = query.toLowerCase();

    const containsAbuse = abusiveWords.words.some(word =>
      lowerQuery.includes(word.toLowerCase())
    );

    const containsName = humanNames.names.some(name =>
      lowerQuery.includes(name.toLowerCase())
    );

    if (containsAbuse || containsName) {
      setMessages(prev => [
        ...prev,
        { type: 'error', text: 'Invalid Input. Please enter a valid food-related query.' },
      ]);
      setQuery('');
      return;
    }

    const userMsg = { type: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setSubmitted(true);
    setLoading(true);

    try {
      const res = await axios.post('http://127.0.0.1:5000/generate_recipe', { query });

      const recipe = res.data;

      if (
        !recipe ||
        Object.keys(recipe).length === 0 ||
        (!recipe.RecipeName && !recipe.Equipment?.length && !recipe.Ingredients?.length && !recipe.Instructions?.length)
      ) {
        setMessages((prev) => [
          ...prev,
          { type: 'error', text: 'Invalid Input. Try again.' },
        ]);
      } else {
        const botMsg = {
          type: 'bot',
          recipe,
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: 'error', text: 'Failed to get recipe. Please try again.' },
      ]);
    } finally {
      setQuery('');
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([]);
    setSubmitted(false);
    localStorage.removeItem('chatMessages');
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
      >
        <source src="/fruit2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className={`flex flex-col h-[85vh] w-[75%] mt-20 border-2 border-green-700 rounded-2xl shadow-lg fixed backdrop-blur-md bg-opacity-70 ${
            darkMode ? 'bg-[#052e14]/80 text-[#dcfce8]' : 'bg-[#f0fdf5]/80 text-[#14532c]'
          }`}
        >
          <div
            className={`flex-grow overflow-auto p-4 ${
              submitted ? '' : 'flex items-center justify-center'
            }`}
          >
            {!submitted && (
              <form onSubmit={handleSubmit} className="w-full sm:w-1/2 mx-auto">
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="What would you like to cook?"
                  className={`w-full p-3 rounded-md text-center text-lg focus:outline-none border ${
                    darkMode
                      ? 'bg-[#15803d] text-[#dcfce8]'
                      : 'bg-[#4ade81] text-[#052e14]'
                  }`}
                />
              </form>
            )}

            {submitted && (
              <div className="flex flex-col gap-4 w-full">
                {messages.map((msg, index) => {
                  if (msg.type === 'user') {
                    return (
                      <div
                        key={index}
                        className="self-end bg-[#22c55f] text-white p-3 rounded-xl max-w-[70%] shadow-md"
                      >
                        {msg.text}
                      </div>
                    );
                  } else if (msg.type === 'bot') {
                    const { RecipeName, Equipment, Ingredients, Instructions } = msg.recipe;
                    return (
                      <div
                        key={index}
                        //  className="self-start bg-[#15803d] text-white p-4 rounded-xl max-w-[80%] shadow-md"
                        className={`self-start p-4 rounded-xl max-w-[80%] shadow-md ${darkMode?'bg-[#15803d] text-[#dcfce8]':'bg-[#4ade81] text-[#052e14]'}`}
                      >
                        <h3 className="text-lg text-center font-semibold mb-2">
                          {RecipeName || 'Recipe'}
                        </h3>
                        {/* className="bg-[#75bd90] text-white rounded-2xl p-5 m-5" */}
                        <div className={`rounded-2xl p-5 m-5 ${darkMode?'bg-[#75bd90]':'bg-green-300 text-gray-800'}`}>
                          {Equipment?.length > 0 && (
                            <div className="mb-2">
                              <strong>Equipment:</strong>
                              <ul className="list-disc ml-5">
                                {Equipment.map((eq, i) => (
                                  <li key={i}>{eq}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className={`rounded-2xl p-5 m-5 ${darkMode?'bg-[#75bd90]':'bg-green-300 text-gray-800'}`}>
                          {Ingredients?.length > 0 && (
                            <div className="mb-2">
                              <strong>Ingredients:</strong>
                              <ul className="list-disc ml-5">
                                {Ingredients.map((ing, i) => (
                                  <li key={i}>{ing}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className={`rounded-2xl p-5 m-5 ${darkMode?'bg-[#75bd90]':'bg-green-300 text-gray-800'}`}>
                          {Instructions?.length > 0 && (
                            <div className="mb-2">
                              <strong>Instructions:</strong>
                              <ol className="list-disc ml-5">
                                {Instructions.map((step, i) => (
                                  <li key={i}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  } else if (msg.type === 'error') {
                    return (
                      <div
                        key={index}
                        className="self-start bg-red-500 text-white p-3 rounded-md max-w-[70%]"
                      >
                        {msg.text}
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}

                {loading && (
                  <div className="self-start">
                    <LoadingSpinner darkMode={darkMode} />
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            )}
          </div>

          {submitted && (
            <form ref={formRef} onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Ask another recipe..."
                className={`flex-grow p-2 rounded-md focus:outline-none border ${
                  darkMode
                    ? 'bg-[#15803d] text-[#dcfce8]'
                    : 'bg-[#4ade81] text-[#052e14]'
                }`}
              />
              <button
                type="submit"
                className="bg-[#14532c] hover:bg-[#16a34b] text-[#C8B6A8] font-bold px-4 py-2 rounded-md"
              >
                Send
              </button>
              <button
                type="button"
                onClick={handleResetChat}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Reset
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
});

export default Chatbot;
