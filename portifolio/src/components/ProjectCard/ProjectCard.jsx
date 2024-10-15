import "./ProjectCard.css";

// Icons
import { BsStarFill, BsStar } from "react-icons/bs";

// Context
import { useLanguage } from "../../context/LanguageContext";

// SVGs
import JSLogo from "../../assets/techAndTools/javascript-logo.svg";
import TSLogo from "../../assets/techAndTools/typescript-logo.svg";
import NodeLogo from "../../assets/techAndTools/nodejs-logo.svg";
import ReactLogo from "../../assets/techAndTools/react-logo.svg";
import ReduxLogo from "../../assets/techAndTools/redux-logo.svg";
// import CsharpLogo from "../../assets/techAndTools/csharp-logo.svg";
import MongoDBLogo from "../../assets/techAndTools/mongodb-logo.svg";
import MySQLLogo from "../../assets/techAndTools/mysql-logo.svg";
import FirebaseLogo from "../../assets/techAndTools/firebase-logo.svg";
import HTMLLogo from "../../assets/techAndTools/html-logo.svg";
import CSSLogo from "../../assets/techAndTools/css-logo.svg";
import DockerLogo from "../../assets/techAndTools/docker-logo.svg";
import GoogleCloudLogo from "../../assets/techAndTools/googlecloud-logo.svg";
import PostmanLogo from "../../assets/techAndTools/postman-logo.svg";
import InsomniaLogo from "../../assets/techAndTools/insomnia-logo.svg";

// Technology and tools logos
const technologyAndToolLogos = {
  js: JSLogo,
  ts: TSLogo,
  node: NodeLogo,
  react: ReactLogo,
  redux: ReduxLogo,
  // csharp: CsharpLogo,
  mongodb: MongoDBLogo,
  mysql: MySQLLogo,
  firebase: FirebaseLogo,
  html: HTMLLogo,
  css: CSSLogo,
  docker: DockerLogo,
  googleCloud: GoogleCloudLogo,
  postman: PostmanLogo,
  insomnia: InsomniaLogo,
};

// Translations
import projectTranslations from "../../translations/projectsTranslations";

const ProjectCard = ({ project, onClick }) => {
  const { currentLanguage, t } = useLanguage();
  const translation = projectTranslations[currentLanguage][project.id];

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image-container">
        <img
          src={project.image}
          alt={translation.title}
          className="project-image"
        />
        <span
          className={`project-type ${
            project.type === "personal" ? "personal" : "freelance"
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
        <p className="project-description">{translation.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <img
              key={tech}
              src={technologyAndToolLogos[tech]}
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
