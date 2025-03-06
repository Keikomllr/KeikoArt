import { useState,useEffect } from "react";


const Header = () => {
  
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
    <header>
      <main>
            <div>
              <a href="/">
                <h1 className="text-8xl p-4 font-bold .object-cover  header-title">KEIKO SUZUKI MÖLLER</h1>
              </a>  
              <div>
                <p className="header-subtitle">Artist / Illustrator</p>
                <div className="absolute top-14 right-2 navitem buttons">
                  <a href="/basket">
                    <button className="checkoutButton basket">
                      <img src="/img/basket.png" alt="Basket Icon" className="w-9 m-1"/>
                    </button>
                  </a>
                  <a href="/favotite">
                    <button className="checkoutButton favorite">
                      <img src="/img/heart.png" alt="heart Icon" className="w-9 m-1" />
                    </button>
                  </a>

                    <button className="checkoutButton search">
                      <img src="/img/search.png" alt="search Icon" className="w-9 m-1" />
                    </button>
                  </div>
              </div>
            </div>
           
      </main>
      <nav className="navbar desktop-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/artworks">Gallery</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/biography">About</a></li>
          <li><a href="https://www.instagram.com/keicoccosuzuki/">Instagram</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
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
          <li><a href="/">Home</a></li>
          <li><a href="/about">Gallery</a></li>
          <li><a href="/products">Store</a></li>
          <li><a href="/biography">About</a></li>
          <li><a href="https://www.instagram.com/keicoccosuzuki/">Instagram</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      
     <section className="emailMe">
        <a href="/contact">
          <img src="/img/email.png" alt="email" />
        </a>
      </section> 
    </header>
  );
};

export default Header;
