// import React from 'react';

// function About() {
//   return (
//     <div className="bg-green-50 min-h-screen flex flex-col mt-10">
//       {/* Header (Assuming you have a shared Header component) */}
      

//       {/* Main Content */}
//       <main className="container mx-auto py-16 px-8 flex-grow">
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <h2 className="text-3xl font-extrabold text-green-800 mb-6">About RecipeGenerator</h2>

//           <section className="mb-8">
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h3>
//             <p className="text-green-600 leading-relaxed">
//               At RecipeGenerator, our mission is to make cooking accessible and enjoyable for everyone.
//               We believe that finding delicious recipes should be quick, easy, and inspiring.
//               Whether you're a seasoned chef or just starting your culinary journey, we're here to help you
//               discover new flavors and create amazing meals.
//             </p>
//           </section>

//           <section className="mb-8">
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Key Features</h3>
//             <ul className="list-disc list-inside text-green-600 leading-relaxed">
//               <li>
//                 <span className="font-semibold text-green-700">Efficient and Fast Response:</span> Our
//                 recipe generation algorithm is designed to provide you with relevant and creative recipes
//                 in a matter of seconds. Say goodbye to endless scrolling!
//               </li>
//               <li>
//                 <span className="font-semibold text-green-700">Step-by-Step Instructions:</span> Each
//                 recipe comes with clear, easy-to-follow, step-by-step instructions, ensuring that you can
//                 confidently prepare any dish, regardless of your experience level.
//               </li>
//               <li>
//                 <span className="font-semibold text-green-700">Ingredients and Equipment:</span> We
//                 provide a comprehensive list of all the necessary ingredients and equipment for each
//                 recipe, so you can be well-prepared before you start cooking.
//               </li>
//               <li>
//                 <span className="font-semibold text-green-700">Personalized Recommendations:</span> (This
//                 feature could be implemented later) Tell us about your dietary preferences, available
//                 ingredients, or cuisine interests, and we'll tailor recipe suggestions just for you.
//               </li>
//               <li>
//                 <span className="font-semibold text-green-700">Save Your Favorites:</span> (This feature
//                 could be implemented later) Create your own personal collection of beloved recipes for
//                 quick access anytime.
//               </li>
//               <li>
//                 <span className="font-semibold text-green-700">Explore Diverse Cuisines:</span> Discover
//                 recipes from around the globe, expanding your culinary horizons and bringing new tastes
//                 to your table.
//               </li>
//             </ul>
//           </section>

//           <section className="mb-8">
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Our Promise</h3>
//             <p className="text-green-600 leading-relaxed">
//               We are committed to providing you with a reliable and inspiring recipe generation experience.
//               Our team is constantly working to improve our algorithms, expand our recipe database, and
//               introduce new features to enhance your cooking journey. We value your feedback and are always
//               striving to make RecipeGenerator the best culinary companion you can find.
//             </p>
//           </section>

//           <section>
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Connect With Us</h3>
//             <p className="text-green-600 leading-relaxed">
//               Have questions, suggestions, or just want to share your culinary creations?
//               Follow us on social media (links to be added) and join our growing community of food lovers!
//             </p>
//             {/* Add social media links here */}
//           </section>
//         </div>
//       </main>

//       {/* Footer (Assuming you have a shared Footer component) */}
//       <footer className="bg-green-100 py-4 text-center text-green-600">
//         <p>&copy; {new Date().getFullYear()} Recipe Generator. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default About;












import React from 'react';

function About({ darkMode }) {
  return (
    <div className={`min-h-screen flex flex-col mt-10 ${darkMode ? 'dark' : ''}`}>
      <main className="container mx-auto py-16 px-8 flex-grow">
      {/* className="bg-green-50 " */}
        <div className={`rounded-lg shadow-md p-8 ${darkMode?'bg-green-900':'bg-green-200'}`}>
          <h2 className={`text-3xl mb-6 font-extrabold ${darkMode?' text-green-300':'text-green-700'} `}>
            About RecipeGenerator
          </h2>

          {/* Mission */}
          <section className="mb-10">
            <h3 className={`text-xl mb-4 font-semibold ${darkMode?' text-green-300':'text-green-700'} `}>Our Mission</h3>
            <p className={`leading-relaxed ${darkMode?'text-green-200':'text-green-600'}`} >
              At RecipeGenerator, our mission is to make cooking accessible and enjoyable for everyone.
              Whether you're a seasoned chef or just starting out, we help you discover flavors and create amazing meals.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-10">
            <h3 className={`text-xl mb-4 font-semibold ${darkMode?' text-green-300':'text-green-700'} `}>Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-4 rounded-md ${darkMode?'bg-green-200 text-green-800' :'bg-green-100'}`}>
                <p><span className="font-semibold">Efficient and Fast Response:</span> Get creative recipes in seconds.</p>
              </div>
              <div className={`p-4 rounded-md ${darkMode?'bg-green-200 text-green-800' :'bg-green-100'}`}>
                <p><span className="font-semibold">Step-by-Step Instructions:</span> Clear and simple cooking steps.</p>
              </div>
              <div className={`p-4 rounded-md ${darkMode?'bg-green-200 text-green-800' :'bg-green-100'}`}>
                <p><span className="font-semibold">Ingredients and Equipment:</span> Everything you need to start cooking.</p>
              </div>
              <div className={`p-4 rounded-md ${darkMode?'bg-green-200 text-green-800' :'bg-green-100'}`}>
                <p><span className="font-semibold">Explore Diverse Cuisines:</span> Discover flavors from around the world.</p>
              </div>
            </div>

            {/* Optional features list */}
            <ul className={`list-disc list-inside leading-relaxed mt-6 ${darkMode?'text-green-300':'text-green-600'}`}>
              <li>
                <span className={`leading-relaxed ${darkMode?'text-green-200':'text-green-600'}`} >Personalized Recommendations:</span> (Coming soon)
              </li>
              <li>
                <span className={`leading-relaxed ${darkMode?'text-green-200':'text-green-600'}`} >Save Your Favorites:</span> (Coming soon)
              </li>
            </ul>
          </section>

          {/* Promise */}
          <section className="mb-10">
            <h3 className={`text-xl mb-4 font-semibold ${darkMode?' text-green-300':'text-green-700'} `}>Our Promise</h3>
            <p className={`leading-relaxed ${darkMode?'text-green-200':'text-green-600'}`} >
              We're committed to improving your cooking journey. Our tech evolves constantly to bring you the best recipes and features.
            </p>
          </section>

          {/* Connect */}
          <section>
            <h3 className={`text-xl mb-4 font-semibold ${darkMode?' text-green-300':'text-green-700'} `}>Connect With Us</h3>
            <p className={`leading-relaxed ${darkMode?'text-green-200':'text-green-600'}`} >
              Have questions or ideas? Reach out and join our food-loving community on social media!
            </p>
          </section>
        </div>
      </main>

      <footer className={`py-4 text-center ${darkMode ? 'bg-green-900 text-white' : 'bg-green-200 text-green-800'}`}>
        <p>&copy; {new Date().getFullYear()} Recipe Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
