import "./TechAndTools.css";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Component
import CarouselTechTools from "../CarouselTechTools/CarouselTechTools";

const TechAndTools = () => {
  const { t } = useLanguage();

  return (
    <section id="tech" className="tech-section">
      <div className="tech-container">
        <h1 className="tech-title">{t("techAndTools", "title")}</h1>
        <p className="tech-description">{t("techAndTools", "description_1")}</p>
        <p className="tech-description">{t("techAndTools", "description_2")}</p>
        <p className="tech-description">{t("techAndTools", "description_3")}</p>
        <CarouselTechTools />
      </div>
    </section>
  );
};

export default TechAndTools;
