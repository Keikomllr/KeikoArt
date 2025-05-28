import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../components/HomeLayout/HomeLayout.css";
import SearchBar from"../../components/SearchBar/SearchBar";

const HomeLayout = () => {
  
  const handleSearch = (query) => {
    console.log("Searching word:", query); 
  }; 

  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth <= 768);


  // OPEN/CLOSE MENU
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // SCROLLING
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

  //-----FOOTER----------
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [openSection, setOpenSection] = useState(null);

  // 画面サイズが変わったら isMobile を更新
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };



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
                <p className="header-subtitle mb-2 relative bottom-4">Artist / Illustrator</p>
              </Link>  
            </div>

            <div className="hidden sm:flex items-center space-x-4">
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
              <li><NavLink to="/gallery" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
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

         {/* MOBILE = alwauys display, DESKTOP = display after scroll down*/}
      {showHamburger && (
        <button className="hamburger sticky-hamburger" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
      )}

      <nav>
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            Home
          </NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
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


    <footer className="py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border shadow p-5">
        <div className="flex flex-row items-center p-4">
          <div> 
            <img src="/img/globe-earth.png" alt="" className="h-12 w-12" />
          </div>
          <div className="p-2 text-xl font-bold text-gray-400">
            <p>Global Delivery</p>
          </div>
        </div>
        <div className="flex flex-row items-center p-4">
          <div>
            <img src="/img/return.png" alt="" className="h-12 w-12" />
          </div>
          <div className="p-2 text-xl font-bold text-gray-400">
            <p>Free returns</p>
          </div>
        </div>
        <div className="flex flex-row items-center p-4">
          <div>
            <img src="/img/security.png" alt="" className="h-12 w-12" />
          </div>
          <div className="p-2 text-xl font-bold text-gray-400">
            <p>Safe Payments</p>
          </div>
        </div>
        <div className="flex flex-row items-center p-4">
          <div>
            <img src="/img/smile.png" alt="" className="h-12 w-12" />
          </div>
          <div className="p-2 text-xl font-bold text-gray-400">
            <p>News Letter</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-6">
      {/* > 640px No accordion */}
      <div className="hidden md:grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* column 1 */}
        <div>
          <h3 className="font-bold mb-2">About</h3>
          <ul className="text-sm space-y-1">
            <li>About</li>
            <li>Company</li>
            <li>Press</li>
            <li>Carrer</li>
          </ul>
        </div>
        
        {/* column 2 */}
        <div>
          <h3 className="font-bold mb-2">Follow Me</h3>
          <ul className="text-sm space-y-1">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Pinterest</li>
            <li>TikTok</li>
          </ul>
        </div>

        {/* column 3 */}
        <div>
          <h3 className="font-bold mb-2">Custermer Service</h3>
          <ul className="text-sm space-y-1">
            <li>FAQ</li>
            <li>Return</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* column 4 */}
        <div>
          <h3 className="font-bold mb-2">News Letter</h3>
          <p className="text-sm mb-2">Subscribe and get access to news, offers, and inspiration!</p>
          <input
            type="email"
            placeholder="Skriv in e-mail"
            className="border px-2 py-1 w-full text-sm mb-2"
          />
          <button className="text-sm bg-gray-800 text-white px-4 py-1 rounded">
            Follow
          </button>
          <p className="text-xs mt-2">
            <a href="#" className="text-gray-500 underline">Read our integritetspolicy</a>
          </p>
        </div>
      </div>

      {/* < 640px ACCORDION*/}
      <div className="md:hidden">
        {[
          { title: "About Us", items: ["Our Story", "Company", "Press", "Careers"], id: "section1" },
          { title: "Follow Us", items: ["Instagram", "TikTok", "Pinterest", "Facebook"], id: "section2" },
          { title: "Customer Service", items: ["FAQ", "Returns", "Contact"], id: "section3" },
        ].map(({ title, items, id }) => (
          <div key={id} className="border-b py-2">
            <h3
              className="font-bold cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection(id)}
            >
              {title}
              <span>{openSection === id ? "−" : "+"}</span>
            </h3>
            <ul className={`${openSection === id ? "block" : "hidden"} text-sm space-y-1 mt-2`}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section (Mobile) */}
        <div className="py-2">
          <h3 className="font-bold">Newsletter</h3>
          <p className="text-sm mb-2">Subscribe and get access to news, offers, and inspiration.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-2 py-1 w-full text-sm mb-2"
          />
          <button className="text-sm bg-gray-800 text-white px-4 py-1 rounded">
            Subscribe
          </button>
          <p className="text-xs mt-2">
            <a href="#" className="text-gray-500 underline">Read our privacy policy</a>
          </p>
        </div>
      </div>
    </section>


      <hr />
       <p className="text-center text-xl border-l p-4">© 2025 Keiko Suzuki Möller</p>
    </footer>
    </div>

  );
};

export default HomeLayout;
