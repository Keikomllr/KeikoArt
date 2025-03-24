import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router";


const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`/api/search?q=${encodeURIComponent(query)}`) // ✅ ポート 8000 に修正
        .then((res) => {
          if (!res.ok) {
            throw new Error("サーバーエラー");
          }
          return res.json();
        })
        .then((data) => setResults(data))
        .catch((error) => console.error("検索エラー:", error));
    }
  }, [query]);

  return (
    <div>
        <div className="bg-slate-200 p-5 mt-4"> 
            <h2 className="text-4xl font-bold text-center">Search Results: "{query}"</h2>
            <p className="text-2xl font-semibold text-center mt-4">Found results: {results.length}</p>
        </div>

      {results.length === 0 ? (
        <p>No matching artworks found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 mx-auto gap-2 p-4">
          {results.map((item) => (
            <li key={item.id} className="border rounded shadow p-4">
              <Link to={`/artworks/${item.id}`}>
              <img src={item.image} alt={item.title} className="w-full"/>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <div className="flex justify-between items-center">
                  <p>{item.category}</p>              
                  <img src="/img/heart.png" alt="" className="h-6 w-6 pr-0" />    
              </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default SearchResults;
