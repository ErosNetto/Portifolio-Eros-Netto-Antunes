import "./ProjectModal.css";

import { useEffect, useState } from "react";

import Modal from "react-modal";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

// Icons
import { BsStarFill, BsGlobe, BsCodeSlash } from "react-icons/bs";

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
  const { currentLanguage, t } = useLanguage();
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
          <div className="projet-modal-header">
            <div className="prjet-modal-title">
              <h2>{translation && translation.title}</h2>
              <span
                className={`${
                  project.type === "personal"
                    ? "type-personal"
                    : "type-freelance"
                }`}
              >
                {project.type === "personal"
                  ? t("projects", "type_1")
                  : "Freelance"}
              </span>
            </div>
            <button onClick={closeModal} className="projet-modal-button-close">
              fechar
            </button>
          </div>

          <div className="images">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="swiper"
            >
              {project.images &&
                project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Project ${index}`}
                      // className="project-image"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <p>{translation && translation.description}</p>

          <h3 className="project-technologies-title">
            Tecnologias utilizadas:
          </h3>
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

          <div className="projet-modal-links">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`website-link ${
                project.websiteUrl === "" ? "link-blocked" : ""
              }`}
            >
              <BsGlobe className="icon" />
              Ver Website
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className={`github-link ${
                project.code === "" ? "link-blocked" : ""
              }`}
            >
              <BsCodeSlash className="icon" />
              Ver Código
            </a>
          </div>
        </div>
      ) : null}
    </Modal>
  );
};

export default ProjectModal;
