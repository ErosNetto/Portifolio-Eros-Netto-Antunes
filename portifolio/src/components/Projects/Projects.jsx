import "./Projects.css";
import { useState } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Component
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectFilter from "../ProjectFilter/ProjectFilter";

// Data
import projectsData from "../../data/projectsData";

// Translations
import projectTranslations from "../../translations/projectsTranslations";

const Projects = () => {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSelect, setFilterSelect] = useState("all");
  const [techFilters, setTechFilters] = useState([]);

  const allTechnologies = Array.from(
    new Set(projectsData.flatMap((project) => project.technologies))
  );

  const filteredProjects = projectsData.filter((project) => {
    const translation = projectTranslations[currentLanguage][project.id];
    const matchesSearch =
      translation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      translation.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterSelect === "all" ||
      (filterSelect === "favorite" && project.isFavorite) ||
      filterSelect === project.type;

    const matchesTech =
      techFilters.length === 0 ||
      techFilters.every((tech) => project.technologies.includes(tech));

    return matchesSearch && matchesFilter && matchesTech;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setFilterSelect("all");
    setTechFilters([]);
  };

  const toggleTechFilter = (tech) => {
    setTechFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">{t("projects", "title")}</h2>
        <p className="projects-description">{t("projects", "description")}</p>
        <ProjectFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterSelect={filterSelect}
          setFilterSelect={setFilterSelect}
          techFilters={techFilters}
          toggleTechFilter={toggleTechFilter}
          clearFilters={clearFilters}
          allTechnologies={allTechnologies}
        />

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="no-projects">{t("projects", "noProjects")}</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
