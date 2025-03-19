import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState(""); // 🔥 useState は1つに統一
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // 🔍 検索処理
  const handleSearch = (e) => {
    e.preventDefault(); // ページリロード防止
    if (query.trim()) {
      navigate(`/search?q=${query}`); // 🔥 URL に検索ワードをセット
      setIsOpen(false); // 検索後に閉じる
    }
  };

  return (
    <div className="relative">
      {/* 🔍 検索アイコン（クリックで検索バーを開く） */}
      <button
        className="checkoutButton search"
        onClick={() => setIsOpen(true)}
      >
        <img src="/img/search.png" alt="Search Icon" className="w-9" />
      </button>

      {/* 🔎 検索バー（デフォルトは非表示） */}
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
              onBlur={() => setIsOpen(false)} // フォーカスを外すと閉じる
            />
            {/* ✖ 閉じるボタン */}
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
