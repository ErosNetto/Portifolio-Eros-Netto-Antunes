import "./ProjectFilter.css";

// Context
import { useLanguage } from "../../context/LanguageContext";

import { FaSearch, FaTimesCircle } from "react-icons/fa";

const ProjectFilter = ({
  searchTerm,
  setSearchTerm,
  filterSelect,
  setFilterSelect,
  techFilters,
  toggleTechFilter,
  clearFilters,
  allTechnologies,
}) => {
  const { t } = useLanguage();
  const technologyLabels = {
    js: "JavaScript",
    ts: "TypeScript",
    node: "Node.js",
    react: "React",
    redux: "Redux",
    mongodb: "MongoDB",
    mysql: "MySQL",
    firebase: "Firebase",
    html: "HTML5",
    css: "CSS3",
  };

  return (
    <div className="filter-container">
      <div className="filter-bar">
        <div className="search-input">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={t("projects", "searchPlaceholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={filterSelect}
          onChange={(e) => setFilterSelect(e.target.value)}
        >
          <option value="all">{t("projects", "select_1")}</option>
          <option value="favorite">{t("projects", "select_2")}</option>
          <option value="personal">{t("projects", "select_3")}</option>
          <option value="freelance">{t("projects", "select_4")}</option>
        </select>
      </div>

      <div className="tech-filter">
        <h3>{t("projects", "techFilter")}</h3>
        <div className="tech-buttons">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleTechFilter(tech)}
              className={`tech-button ${
                techFilters.includes(tech) ? "selected" : ""
              }`}
            >
              {technologyLabels[tech] || tech}
            </button>
          ))}
        </div>
      </div>

      <button onClick={clearFilters} className="clear-button">
        <FaTimesCircle className="clear-icon" />
        {t("projects", "clearFilters")}
      </button>
    </div>
  );
};

export default ProjectFilter;
