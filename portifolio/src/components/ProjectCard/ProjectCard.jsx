import "./ProjectCard.css";

// Icons
import { BsStarFill, BsStar } from "react-icons/bs";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Logos
import { techAndToolLogos } from "../../constants/techAndToolLogos";

// Translations
import projectTranslations from "../../translations/projectsTranslations";

const ProjectCard = ({ project, onClick }) => {
  const { currentLanguage, t } = useLanguage();
  const translation = projectTranslations[currentLanguage][project.id];

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image-container">
        <img
          src={project.images[0]}
          alt={translation.title}
          className="project-image"
        />
        <span
          className={`project-type ${
            project.type === "personal" ? "type-personal" : "type-freelance"
          }`}
        >
          {project.type === "personal" ? t("projects", "type_1") : "Freelance"}
        </span>
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{translation.title}</h3>
          {project.isFavorite && <BsStarFill className="star-icon" />}
        </div>
        <p className="project-description">{translation.summary}</p>
        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <img
              key={tech}
              src={techAndToolLogos[tech]}
              alt={tech}
              className="technology-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
