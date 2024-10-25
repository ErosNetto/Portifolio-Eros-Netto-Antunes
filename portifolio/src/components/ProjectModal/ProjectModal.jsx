import "./ProjectModal.css";

import { useEffect, useState } from "react";

import Modal from "react-modal";

// Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Icons
import { BsStarFill, BsXLg, BsGlobe, BsCodeSlash } from "react-icons/bs";

// Logos
import { techAndToolLogos } from "../../constants/techAndToolLogos";

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
          <div className="project-modal-header">
            <div className="project-modal-title">
              <h2>{translation && translation.title}</h2>
              {project.isFavorite && <BsStarFill className="star-icon" />}
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
            <button className="project-modal-button-close" onClick={closeModal}>
              <span className="icon">
                <BsXLg />
              </span>
            </button>
          </div>

          <div className="modal-images-container">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              navigation={true}
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
                      className="project-image-modal"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <p>{translation && translation.description}</p>

          <h3 className="project-technologies-title">
            {t("projects", "modalTechAndTools")}
          </h3>
          <div className="project-technologies-modal">
            {project.technologies.map((tech) => (
              <img
                key={tech}
                src={techAndToolLogos[tech]}
                alt={tech}
                className="technology-logo"
              />
            ))}
          </div>

          <div className="project-modal-links">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`website-link ${
                project.websiteUrl === "" ? "link-blocked" : ""
              }`}
            >
              <BsGlobe className="icon" />
              {t("projects", "modalBtn_1")}
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
              {t("projects", "modalBtn_2")}
            </a>
          </div>
        </div>
      ) : null}
    </Modal>
  );
};

export default ProjectModal;
