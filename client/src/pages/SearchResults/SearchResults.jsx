import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      <h2>Search Results: "{query}"</h2>
      <p>Found results: {results.length}</p>
      
      {results.length === 0 ? (
        <p>No matching artworks found.</p>
      ) : (
        <ul>
          {results.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>カテゴリ: {item.category}</p>
              <img src={item.image} alt={item.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
