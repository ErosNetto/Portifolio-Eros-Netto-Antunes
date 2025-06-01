import "./FloatingActionButton.css";

import { useState, useEffect, useRef } from "react";

// Icons
// import { FiSettings } from "react-icons/fi";
import { BsThreeDotsVertical, BsTranslate, BsDownload } from "react-icons/bs";

// Context
import { useLanguage } from "../../context/LanguageContext";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setCurrentLanguage, t } = useLanguage();
  const menuRef = useRef(null); // Cria uma referência para o menu

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
  };

  // Função para baixar o CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "/Portifolio-Eros-Netto-Antunes/Curriculo_Eros_Netto_Antunes.pdf";
    link.download = "Curriculo_Eros_Netto_Antunes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Função para fechar o menu quando o usuário clica fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-menu-container" ref={menuRef}>
      <button className="dropdown-trigger" onClick={toggleMenu}>
        <BsThreeDotsVertical size={20} />
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <div
            className="dropdown-item"
            onClick={() => handleLanguageChange("pt")}
          >
            <BsTranslate size={18} />
            <span>{t("floatingActionButton", "ptBr")}</span>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleLanguageChange("en")}
          >
            <BsTranslate size={18} />
            <span>English</span>
          </div>
          <div className="dropdown-item" onClick={handleDownloadCV}>
            <BsDownload size={18} />
            <span>{t("floatingActionButton", "buttonCV")}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
