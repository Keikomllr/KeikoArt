import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../components/HomeLayout/HomeLayout.css";
import SearchBar from"../../components/SearchBar/SearchBar";

const HomeLayout = () => {
  
  const handleSearch = (query) => {
    console.log("Searching word:", query); // 検索ワードを受け取る（あとで検索機能に使える）
    // TODO: 検索結果を表示する処理を追加（APIリクエスト、フィルタリングなど）
  }; 

  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth <= 768);


  // メニューの開閉
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // スクロール時の処理
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        const navbar = document.querySelector(".desktop-nav");
        if (navbar) {
          const navbarHeight = navbar.offsetHeight;
          setShowHamburger(window.scrollY > navbarHeight);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header>
        <section>
          <div className="flex items-center justify-between p-12"> 
            <div>
              <img src="/img/keikoicon1.png" alt="" className="header-icon  w-20 animate-pulse absolute inset-x-6 top-7"/>
            </div>  
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/">
                <h1 className="text-8xl p-4 font-bold .object-cover    header-title">KEIKO SUZUKI MÖLLER</h1>
              </Link>  
              <p className="header-subtitle">Artist / Illustrator</p>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/basket">
                <button className="checkoutButton basket">
                  <img src="/img/basket.png" alt="Basket Icon" className="w-9"/>
                </button>
              </Link>
            
              <Link to="/favotite">
                <button className="checkoutButton favorite">
                  <img src="/img/heart.png" alt="heart Icon" className="w-9" />
                </button>
              </Link>
            
              {/* <button className="checkoutButton search">
                <img src="/img/search.png" alt="search Icon" className="w-9" /></button> */}
                <SearchBar onSearch={handleSearch} />
                
            </div>
          </div>
        </section>
        <nav className="navbar desktop-nav">
          <div>
            <ul>
              <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                Home
              </NavLink></li>
              <li><NavLink to="/artworks" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                Gallery
              </NavLink></li>
              <li><NavLink to="/store" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                Store
              </NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                About
              </NavLink></li>
              <li><NavLink to="https://www.instagram.com/keicoccosuzuki/" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                Instagram
              </NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                Contact
              </NavLink></li>
            </ul>
          </div>
        </nav>

         {/* モバイルでは常に表示、デスクトップではスクロール後に表示 */}
      {showHamburger && (
        <button className="hamburger sticky-hamburger" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
      )}

      {/* モバイルとスクロール後のメニューを共通化 */}
      <nav>
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            Home
          </NavLink></li>
          <li><NavLink to="/artworks" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            Gallery
          </NavLink></li>
          <li><NavLink to="/store" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            Store
          </NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            About
          </NavLink></li>
          <li><NavLink to="https://www.instagram.com/keicoccosuzuki/" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            Instagram
          </NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            Contact
          </NavLink></li>
        </ul>
      </nav>
     <section className="emailMe">
        <a href="/contact">
          <img src="/img/email.png" alt="email" />
        </a>
      </section> 
    </header>

    
    <main>
      <Outlet />
    </main>

    <footer className="bg-color-">
      <hr />
       <p className="text-center text-xl border-l p-4">© 2025 Keiko Suzuki Möller</p>
    </footer>
    </div>

  );
};

export default HomeLayout;
