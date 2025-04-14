

import React from 'react';

function LoadingSpinner({ darkMode }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50 backdrop-blur-sm z-50 rounded-2xl">
      <img
        src="/loading.gif"
        alt="Loading animation"
        className="w-32 h-32 mb-4 rounded-full "
      />
      <p className={`text-xl font-semibold ${darkMode ? 'text-green-900' : 'text-green-900'} animate-pulse`}>
        Generating Recipes...
      </p>
    </div>
  );
}

export default LoadingSpinner;
