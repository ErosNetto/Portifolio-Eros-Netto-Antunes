import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext"; // Importando o contexto
import { FiSettings, FiX } from "react-icons/fi";
import "./FloatingActionButton.css";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLanguage } = useLanguage(); // Obtendo o setter de linguagem

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false); // Fechar o menu após a seleção
  };

  return (
    <div className="fab-container">
      <button className="fab" onClick={toggleMenu}>
        {isOpen ? <FiX size={24} /> : <FiSettings size={24} />}
      </button>
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
          {/* Adicione mais opções conforme necessário */}
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
