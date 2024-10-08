import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <span>Eros</span>
          </div>
          <div className="navbar-menu desktop">
            <div className="menu-items">
              {["Home", "About", "Tech", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="menu-link"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="mobile-menu">
            <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`navbar-menu mobile ${isOpen ? "open" : ""}`}>
        <div className="menu-items">
          {["Home", "About", "Tech", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="menu-link">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
