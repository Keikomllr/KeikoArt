import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState(""); 
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // SEARCH FUNCTION
  const handleSearch = (e) => {
    e.preventDefault(); 
    if (query.trim()) {
      navigate(`/search?q=${query}`); 
      setIsOpen(false); 
    }
  };

  return (
    <div className="relative">
      
      <button
        className="checkoutButton search"
        onClick={() => setIsOpen(true)}
      >
        <img src="/img/search.png" alt="Search Icon" className="w-9" />
      </button>

      
      {isOpen && (
        <div
          className="absolute right-0 top-0 flex items-center w-80 bg-white border border-gray-300 rounded-full shadow-lg p-3 transition-all duration-300 ease-in-out"
        >
          <form onSubmit={handleSearch} className="w-full flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full p-2 text-lg outline-none bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              onBlur={() => setIsOpen(false)} 
            />
            {/* ✖ CLOSE BUTTON */}
            <button
              type="button"
              className="ml-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes className="text-xl text-gray-600" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
