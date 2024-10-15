import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./ProjectModal.css";

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

// Context
import { useLanguage } from "../../context/LanguageContext";

// Translations
import projectTranslations from "../../translations/projectsTranslations";

Modal.setAppElement("#root");

const ProjectModal = ({ project, closeModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { currentLanguage } = useLanguage();
  const [translation, setTranslation] = useState(null);

  useEffect(() => {
    if (project) {
      setModalIsOpen(true);
      // document.body.classList.add("modal-open");
      const projectTranslation =
        projectTranslations[currentLanguage][project.id];
      setTranslation(projectTranslation);
    } else {
      setModalIsOpen(false);
      // document.body.classList.remove("modal-open");
      setTranslation(null);
    }

    // return () => {
    //   document.body.classList.remove("modal-open");
    // };
  }, [project, currentLanguage]);

  // useEffect(() => {
  //   if (project) {
  //     setModalIsOpen(true);
  //   } else {
  //     setModalIsOpen(false);
  //   }
  // }, [project]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Project Modal"
      overlayClassName="modal-overlay"
      className="modal-container"
      shouldCloseOnOverlayClick={false}
      // shouldCloseOnEsc={false}
    >
      {project ? (
        <div className="project-modal-content">
          <h2>{translation && translation.title}</h2>
          <p>{translation && translation.description}</p>
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
          <button onClick={closeModal}>Fechar</button>
        </div>
      ) : null}
    </Modal>
  );
};

export default ProjectModal;
