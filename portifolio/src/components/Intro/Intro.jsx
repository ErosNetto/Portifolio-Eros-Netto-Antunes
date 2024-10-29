import "./Intro.css";

// Context
import { useLanguage } from "../../context/LanguageContext";

const Intro = () => {
  const { t } = useLanguage();

  // Função para baixar o CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Currículo Eros Netto Antunes.pdf";
    link.download = "Currículo Eros Netto Antunes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="intro-section">
      <div className="intro-container">
        <h1 className="intro-title">{t("intro", "title")}</h1>
        <p className="intro-description">{t("intro", "description")}</p>
        <div className="intro-button">
          <a href="#contact">{t("intro", "button")}</a>
          <button onClick={handleDownloadCV}>{t("intro", "buttonCV")}</button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
