import { useState } from "react";

// Icons
import { FiMenu, FiX } from "react-icons/fi";

// CSS
import "./NavBar.css";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Components
import FloatingActionButton from "../FloatingActionButton/FloatingActionButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = ["home", "about", "tech", "projects", "contact"];

  // Função para fechar o menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <span>Eros</span>
          </div>
          <div className="navbar-menu desktop">
            <div className="menu-items">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="menu-link"
                  onClick={handleLinkClick}
                >
                  {t("navbar", item)}
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
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="menu-link"
              onClick={handleLinkClick}
            >
              {t("navbar", item)}
            </a>
          ))}
        </div>
      </div>
      <FloatingActionButton />
    </nav>
  );
};

export default NavBar;
