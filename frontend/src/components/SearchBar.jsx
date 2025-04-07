import React from 'react';

function SearchBar({ query, setQuery, handleSubmit, darkMode }) {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="flex w-full">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter recipe query"
                    className={`border p-2 rounded-l-md w-full flex-grow focus:outline-none ${darkMode ? 'dark bg-[#15803d] dark:border-[#166534] dark:text-[#dcfce8]' : 'bg-[#4ade81] border-[#22c55f] text-[#052e14]'}`}
                />
                <button
                    type="submit"
                    className="bg-[#14532c] hover:bg-[#16a34b] text-[#C8B6A8] font-bold py-2 px-4 rounded-r-md"
                >
                    Generate
                </button>
            </div>
        </form>
    );
}

export default SearchBar;