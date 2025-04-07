// import React from 'react';

// function Navbar({ darkMode, setDarkMode }) {
//   const currentPath = window.location.pathname;

//   const navLinkClasses = (path) =>
//     `transition duration-300 ease-in-out px-4 py-2 rounded-md font-medium
//      ${
//        currentPath === path
//          ? 'bg-green-500 text-white'
//          : 'text-green-600 hover:bg-green-200 hover:text-green-800'
//      }`;

//   return (
//     <header className={`py-6 px-6 shadow-md w-full fixed top-0 left-0 right-0 z-50 ${
//       darkMode ? 'bg-[#052e14]' : 'bg-green-100'
//     }`}>
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-green-700">
//           <span className="text-green-500">Chef</span>Bot
//         </h1>
//         <nav>
//           <ul className="flex space-x-4 items-center">
//             <li>
//               <a href="/" className={navLinkClasses('/')}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/chatbot" className={navLinkClasses('/chatbot')}>
//                 Chatbot
//               </a>
//             </li>
//             <li>
//               <a href="/about" className={navLinkClasses('/about')}>
//                 About
//               </a>
//             </li>
//             <li>
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className={`py-2 px-4 rounded-md font-medium transition-all duration-300 ${
//                   darkMode
//                     ? 'bg-green-700 text-white hover:bg-green-600'
//                     : 'bg-green-500 text-white hover:bg-green-600'
//                 }`}
//               >
//                 {darkMode ? 'Light' : 'Dark'}
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;












import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // ✅ Import Link and useLocation

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation(); // ✅ Hook to get current path
  const currentPath = location.pathname;

  const navLinkClasses = (path) =>
    `transition duration-300 ease-in-out px-4 py-2 rounded-md font-medium
     ${
       currentPath === path
         ? 'bg-green-500 text-white'
         : 'text-green-600 hover:bg-green-200 hover:text-green-800'
     }`;

  return (
    <header className={`py-6 px-6 shadow-md w-full fixed top-0 left-0 right-0 z-50 ${
      darkMode ? 'bg-[#052e14]' : 'bg-green-100'
    }`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">
          <span className="text-green-500">Chef</span>Bot
        </h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/" className={navLinkClasses('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/chatbot" className={navLinkClasses('/chatbot')}>
                Chatbot
              </Link>
            </li>
            <li>
              <Link to="/about" className={navLinkClasses('/about')}>
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                  darkMode
                    ? 'bg-green-700 text-white hover:bg-green-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {darkMode ? 'Light' : 'Dark'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
