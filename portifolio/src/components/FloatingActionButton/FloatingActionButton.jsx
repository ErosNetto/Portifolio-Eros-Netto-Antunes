import "./FloatingActionButton.css";

import { useState } from "react";

// Icons
import { FiSettings, FiX } from "react-icons/fi";

// Context
import { useLanguage } from "../../context/LanguageContext";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setCurrentLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fab-container">
      {isOpen && (
        <div className="fab-options">
          <button
            className="fab-option"
            onClick={() => handleLanguageChange("en")}
          >
            English
          </button>
          <button
            className="fab-option"
            onClick={() => handleLanguageChange("pt")}
          >
            Português
          </button>
        </div>
      )}
      <button className="fab" onClick={toggleMenu}>
        {isOpen ? <FiX size={24} /> : <FiSettings size={24} />}
      </button>
    </div>
  );
};

export default FloatingActionButton;
