import React, { useState } from 'react';
import RecipeCarousel from '../RecipeCarousel';

function Home({ darkMode }) {
  const [query, setQuery] = useState('');

  const handleRecipeClick = (recipeName) => {
    setQuery(recipeName);
    localStorage.setItem('selectedRecipeName', recipeName); // <-- updated this
    window.location.href = '/chatbot';
  };
  

  return (
    <div className={`relative w-full min-h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
      >
        <source src="/animation1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay for readability */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-10 ${
          darkMode ? 'bg-black opacity-60' : 'bg-white opacity-30'
        }`}
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <main className="container mx-auto py-16 px-8 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2
              className={`text-4xl font-extrabold mb-6 animate-slide-fade ${
                darkMode ? 'text-white' : 'text-green-900'
              }`}
            >
              Discover Delicious Recipes Effortlessly
            </h2>

            <p className={`text-lg mb-8 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              Tell us what ingredients you have, and we'll generate amazing recipes for you. <br />
              Embrace the joy of cooking with fresh, green-inspired ideas!
            </p>

            <button
              className={`font-semibold py-3 px-6 rounded-lg border shadow-lg
                transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer animate-fade-in
                focus:outline-none focus:ring-2 focus:ring-opacity-75
                ${
                  darkMode
                    ? 'bg-green-600 text-white border-green-700 hover:bg-white hover:text-green-700'
                    : 'bg-green-500 text-white border-green-700 hover:bg-white hover:text-green-700'
                }`}
              onClick={() => (window.location.href = '/chatbot')}
            >
              Start Generating Now
            </button>

            <div className=' h-80 w-full mt-20 '>
              <RecipeCarousel onRecipeClick={handleRecipeClick} />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          className={`py-4 text-center ${
            darkMode
              ? 'bg-green-900 bg-opacity-70 text-white'
              : 'bg-green-100 bg-opacity-70 text-green-900'
          }`}
        >
          <p>&copy; {new Date().getFullYear()} Recipe Generator. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
























// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import RecipeCarousel from '../RecipeCarousel';

// function Home({ darkMode }) {
//   const [query, setQuery] = useState('');
//   const navigate = useNavigate();

//   const handleRecipeClick = (recipeName) => {
//     setQuery(recipeName);
//     localStorage.setItem('selectedRecipeName', recipeName);
//     navigate('/chatbot'); // ✅ Client-side navigation
//   };

//   return (
//     <div className={`relative w-full min-h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
//       >
//         <source src="/animation1.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Optional dark overlay for readability */}
//       <div
//         className={`absolute top-0 left-0 w-full h-full z-10 ${
//           darkMode ? 'bg-black opacity-60' : 'bg-white opacity-30'
//         }`}
//       />

//       {/* Main Content */}
//       <div className="relative z-20 flex flex-col min-h-screen">
//         <main className="container mx-auto py-16 px-8 flex-grow flex items-center justify-center">
//           <div className="text-center">
//             <h2
//               className={`text-4xl font-extrabold mb-6 animate-slide-fade ${
//                 darkMode ? 'text-white' : 'text-green-900'
//               }`}
//             >
//               Discover Delicious Recipes Effortlessly
//             </h2>

//             <p className={`text-lg mb-8 ${darkMode ? 'text-white' : 'text-green-900'}`}>
//               Tell us what ingredients you have, and we'll generate amazing recipes for you. <br />
//               Embrace the joy of cooking with fresh, green-inspired ideas!
//             </p>

//             <button
//               className={`font-semibold py-3 px-6 rounded-lg border shadow-lg
//                 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer animate-fade-in
//                 focus:outline-none focus:ring-2 focus:ring-opacity-75
//                 ${
//                   darkMode
//                     ? 'bg-green-600 text-white border-green-700 hover:bg-white hover:text-green-700'
//                     : 'bg-green-500 text-white border-green-700 hover:bg-white hover:text-green-700'
//                 }`}
//               onClick={() => navigate('/chatbot')} // ✅ Updated
//             >
//               Start Generating Now
//             </button>

//             <div className='h-80 w-full mt-20'>
//               <RecipeCarousel onRecipeClick={handleRecipeClick} />
//             </div>
//           </div>
//         </main>

//         {/* Footer */}
//         <footer
//           className={`py-4 text-center ${
//             darkMode
//               ? 'bg-green-900 bg-opacity-70 text-white'
//               : 'bg-green-100 bg-opacity-70 text-green-900'
//           }`}
//         >
//           <p>&copy; {new Date().getFullYear()} Recipe Generator. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Home;

