
// Chatbot.jsx

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

// ✅ Using local backend URL
const API_URL = import.meta.env.VITE_BACKEND_URL;



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
  // console.log("API_URL:", API_URL);


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
      const res = await axios.post(`${API_URL}/generate_recipe`, { query });
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
        const botMsg = { type: 'bot', recipe };
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
        <div className={`flex flex-col h-[85vh] w-[75%] mt-20 border-2 border-green-700 rounded-2xl shadow-lg fixed backdrop-blur-md bg-opacity-70 ${
          darkMode ? 'bg-[#052e14]/80 text-[#dcfce8]' : 'bg-[#f0fdf5]/80 text-[#14532c]'
        }`}>
          <div className={`flex-grow overflow-auto p-4 ${submitted ? '' : 'flex items-center justify-center'}`}>
            {!submitted && (
              <form onSubmit={handleSubmit} className="w-full sm:w-1/2 mx-auto">
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="What would you like to cook?"
                  className={`w-full p-3 rounded-md text-center text-lg focus:outline-none border ${
                    darkMode ? 'bg-[#15803d] text-[#dcfce8]' : 'bg-[#4ade81] text-[#052e14]'
                  }`}
                />
              </form>
            )}

            {submitted && (
              <div className="flex flex-col gap-4 w-full">
                {messages.map((msg, index) => {
                  if (msg.type === 'user') {
                    return (
                      <div key={index} className="self-end bg-[#22c55f] text-white p-3 rounded-xl max-w-[70%] shadow-md">
                        {msg.text}
                      </div>
                    );
                  } else if (msg.type === 'bot') {
                    const { RecipeName, Equipment, Ingredients, Instructions } = msg.recipe;
                    return (
                      <div key={index} className={`self-start p-4 rounded-xl max-w-[80%] shadow-md ${darkMode?'bg-[#15803d] text-[#dcfce8]':'bg-[#4ade81] text-[#052e14]'}`}>
                        <h3 className="text-lg text-center font-semibold mb-2">
                          {RecipeName || 'Recipe'}
                        </h3>
                        <div className={`rounded-2xl p-5 m-5 ${darkMode?'bg-[#75bd90]':'bg-green-300 text-gray-800'}`}>
                          {Equipment?.length > 0 && (
                            <div className="mb-2">
                              <strong>Equipment:</strong>
                              <ul className="list-disc ml-5">{Equipment.map((eq, i) => <li key={i}>{eq}</li>)}</ul>
                            </div>
                          )}
                        </div>
                        <div className={`rounded-2xl p-5 m-5 ${darkMode?'bg-[#75bd90]':'bg-green-300 text-gray-800'}`}>
                          {Ingredients?.length > 0 && (
                            <div className="mb-2">
                              <strong>Ingredients:</strong>
                              <ul className="list-disc ml-5">{Ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>
                            </div>
                          )}
                        </div>
                        <div className={`rounded-2xl p-5 m-5 ${darkMode?'bg-[#75bd90]':'bg-green-300 text-gray-800'}`}>
                          {Instructions?.length > 0 && (
                            <div className="mb-2">
                              <strong>Instructions:</strong>
                              <ol className="list-disc ml-5">{Instructions.map((step, i) => <li key={i}>{step}</li>)}</ol>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  } else if (msg.type === 'error') {
                    return (
                      <div key={index} className="self-start bg-red-500 text-white p-3 rounded-md max-w-[70%]">
                        {msg.text}
                      </div>
                    );
                  } else return null;
                })}
                {loading && <div className="self-start"><LoadingSpinner darkMode={darkMode} /></div>}
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
                  darkMode ? 'bg-[#15803d] text-[#dcfce8]' : 'bg-[#4ade81] text-[#052e14]'
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
