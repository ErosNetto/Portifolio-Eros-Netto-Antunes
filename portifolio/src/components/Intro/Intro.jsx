import "./Intro.css";

// Context
import { useLanguage } from "../../context/LanguageContext";

const Intro = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="intro-section">
      <div className="intro-container">
        <h1 className="intro-title">{t("intro", "title")}</h1>
        <p className="intro-description">{t("intro", "description")}</p>
        <a href="#contact" className="intro-button">
          {t("intro", "button")}
        </a>
      </div>
    </section>
  );
};

export default Intro;
