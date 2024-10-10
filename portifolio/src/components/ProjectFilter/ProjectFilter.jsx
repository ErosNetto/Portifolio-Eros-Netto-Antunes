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
    css: "CSS",
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

        <div className="filter-content">
          <div className="radio-input">
            <label className="label">
              <input
                type="radio"
                name="value-radio"
                value="all"
                checked={filterSelect === "all"}
                onChange={(e) => setFilterSelect(e.target.value)}
              />
              <p className="text">{t("projects", "select_1")}</p>
            </label>
            <label className="label">
              <input
                type="radio"
                name="value-radio"
                value="favorite"
                checked={filterSelect === "favorite"}
                onChange={(e) => setFilterSelect(e.target.value)}
              />
              <p className="text">{t("projects", "select_2")}</p>
            </label>
            <label className="label">
              <input
                type="radio"
                name="value-radio"
                value="personal"
                checked={filterSelect === "personal"}
                onChange={(e) => setFilterSelect(e.target.value)}
              />
              <p className="text">{t("projects", "select_3")}</p>
            </label>
            <label className="label">
              <input
                type="radio"
                name="value-radio"
                value="freelance"
                checked={filterSelect === "freelance"}
                onChange={(e) => setFilterSelect(e.target.value)}
              />
              <p className="text">{t("projects", "select_4")}</p>
            </label>
          </div>

          <div className="tech-filter">
            <h3>{t("projects", "techFilter")}</h3>

            <div className="checkbox-inputs">
              {allTechnologies.map((tech) => (
                <label key={tech} className="checkbox">
                  <input
                    type="checkbox"
                    checked={techFilters.includes(tech)}
                    onChange={() => toggleTechFilter(tech)}
                  />
                  <span className="name">{technologyLabels[tech] || tech}</span>
                </label>
              ))}
            </div>
          </div>
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
