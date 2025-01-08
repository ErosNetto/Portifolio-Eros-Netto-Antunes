import "./AboutMe.css";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Images
import FotoEros from "../../assets/foto-de-perfil-redondo.webp";

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">{t("aboutMe", "title")}</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={FotoEros} alt="Seu Nome" className="about-photo" />
          </div>
          <div className="about-text">
            <p>{t("aboutMe", "aboutTextOne")}</p>
            <p>{t("aboutMe", "aboutTextTwo")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
