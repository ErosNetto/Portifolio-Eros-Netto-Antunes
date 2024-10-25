import "./FloatingActionButton.css";

import { useState } from "react";

// Icons
import { FiSettings, FiX } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";

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

  // Função para baixar o CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "../../public/Currículo Eros Netto Antunes.pdf";
    link.download = "Currículo Eros Netto Antunes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <button className="fab-option" onClick={handleDownloadCV}>
            {/* <BsDownload /> */}
            Baixar CV
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
