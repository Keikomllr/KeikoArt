import { useState } from "react";


const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  // メニューの開閉
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <main>
            <h1 className="header-title">KEIKO SUZUKI MÖLLER</h1>
            <p className="header-subtitle">Artist / Illustrator</p>
      </main>
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}   {/* 開いてるときは×、閉じてるときは☰ */}
        </div>
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Gallery</a></li>
          <li><a href="/products">Store</a></li>
          <li><a href="/biography">About</a></li>
          <li><a href="https://www.instagram.com/keicoccosuzuki/">Instagram</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
