// Projects images
import SiteVendaDeCurso from "../assets/projects/site-venda-de-curso.webp";
import ARedeSocial from "../assets/projects/a-rede-social.webp";
import CasaLuzImoveis from "../assets/projects/casa-luz-imoveis.webp";
import MiniBlog from "../assets/projects/miniblog.webp";
import MovieHub from "../assets/projects/movie-hub.webp";
import TaskMaster from "../assets/projects/projeto-task-master.webp";
import PalavraOculta from "../assets/projects/palavra-oculta.webp";
import LandingPage from "../assets/projects/landing-page.webp";
import SMMercearia from "../assets/projects/sm-mercearia.webp";

const projectsData = [
  {
    id: 1,
    images: [SiteVendaDeCurso, SiteVendaDeCurso, SiteVendaDeCurso],
    technologies: ["js", "react", "node", "redux", "css", "mysql"],
    isFavorite: true,
    type: "personal",
    code: "https://github.com/ErosNetto/TCC-Site-Venda-de-Curso",
    websiteUrl: "",
  },
  {
    id: 2,
    images: [ARedeSocial, ARedeSocial, ARedeSocial],
    technologies: ["js", "react", "node", "redux", "css", "mongodb"],
    isFavorite: true,
    type: "personal",
    code: "https://github.com/ErosNetto/A-Rede-Social",
    websiteUrl: "",
  },
  {
    id: 3,
    images: [CasaLuzImoveis, CasaLuzImoveis, CasaLuzImoveis],
    technologies: ["js", "react", "node", "redux", "css", "mongodb"],
    isFavorite: true,
    type: "freelance",
    code: "https://github.com/ErosNetto/CasaLuz",
    websiteUrl: "https://casaluzimoveis.com/",
  },
  {
    id: 4,
    images: [MiniBlog, MiniBlog, MiniBlog],
    technologies: ["js", "react", "node", "css", "firebase"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Projeto-MiniBlog",
    websiteUrl: "https://erosnetto.github.io/Projeto-MiniBlog/",
  },
  {
    id: 5,
    images: [MovieHub, MovieHub, MovieHub],
    technologies: ["js", "react", "node", "css"],
    isFavorite: true,
    type: "personal",
    code: "https://github.com/ErosNetto/MovieHub",
    websiteUrl: "",
  },
  {
    id: 6,
    images: [TaskMaster, TaskMaster, TaskMaster],
    technologies: ["ts", "react", "node", "css"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/TaskMaster",
    websiteUrl: "",
  },
  {
    id: 7,
    images: [PalavraOculta, PalavraOculta, PalavraOculta],
    technologies: ["js", "react", "node"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Projeto-Palavra-Oculta",
    websiteUrl: "https://erosnetto.github.io/Projeto-Palavra-Oculta/",
  },
  {
    id: 8,
    images: [LandingPage, LandingPage, LandingPage],
    technologies: ["html", "css", "js"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Landing-page",
    websiteUrl: "https://erosnetto.github.io/Landing-page/",
  },
  {
    id: 9,
    images: [SMMercearia, SMMercearia, SMMercearia],
    technologies: ["html", "css", "js"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Projeto-SM-Mercearia",
    websiteUrl: "https://erosnetto.github.io/Projeto-SM-Mercearia/",
  },
];

export default projectsData;
