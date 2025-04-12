

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
              Have questions or ideas? Reach out and join our food-loving community on social media! &nbsp;&nbsp;
              <a className='font-bold text-2xl hover:text-3xl' href="https://www.instagram.com/kundan_____________singh/">Instagram</a>
            </p>
          </section>
        </div>
      </main>

      <footer className={`py-4 text-center ${darkMode ? 'bg-green-900 text-white' : 'bg-green-200 text-green-800'}`}>
      <p> Developed by Kundan, Anish and Shivam</p>
      </footer>
    </div>
  );
}

export default About;
