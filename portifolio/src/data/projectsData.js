// Projects images
import SiteVendaDeCurso from "../assets/projects/site-venda-de-curso.webp";
import ARedeSocial from "../assets/projects/a-rede-social.webp";
import CasaLuzImoveis from "../assets/projects/casa-luz-imoveis.webp";
import MiniBlog from "../assets/projects/miniblog.webp";
import SMMercearia from "../assets/projects/sm-mercearia.webp";

// Palavra Oculta
import PalavraOculta1 from "../assets/projects/palavraOculta/palavra_oculta_1.webp";
import PalavraOculta2 from "../assets/projects/palavraOculta/palavra_oculta_2.webp";
import PalavraOculta3 from "../assets/projects/palavraOculta/palavra_oculta_3.webp";
import PalavraOculta4 from "../assets/projects/palavraOculta/palavra_oculta_4.webp";
import PalavraOculta5 from "../assets/projects/palavraOculta/palavra_oculta_5.webp";

// TaskMaster
import TaskMaster1 from "../assets/projects/taskMaster/task_master_1.webp";
import TaskMaster2 from "../assets/projects/taskMaster/task_master_2.webp";
import TaskMaster3 from "../assets/projects/taskMaster/task_master_3.webp";
import TaskMaster4 from "../assets/projects/taskMaster/task_master_4.webp";

// MovieHub
import MovieHub1 from "../assets/projects/movieHub/movie_hub_1.webp";
import MovieHub2 from "../assets/projects/movieHub/movie_hub_2.webp";
import MovieHub3 from "../assets/projects/movieHub/movie_hub_3.webp";
import MovieHub4 from "../assets/projects/movieHub/movie_hub_4.webp";

// Landing Page
import LandingPage1 from "../assets/projects/landingPage/landing_page_1.webp";
import LandingPage2 from "../assets/projects/landingPage/landing_page_2.webp";
import LandingPage3 from "../assets/projects/landingPage/landing_page_3.webp";
import LandingPage4 from "../assets/projects/landingPage/landing_page_4.webp";
import LandingPage5 from "../assets/projects/landingPage/landing_page_5.webp";
import LandingPage6 from "../assets/projects/landingPage/landing_page_6.webp";
import LandingPage7 from "../assets/projects/landingPage/landing_page_7.webp";

const projectsData = [
  {
    id: 1,
    images: [SiteVendaDeCurso],
    technologies: ["js", "react", "node", "redux", "css", "mysql"],
    isFavorite: true,
    type: "personal",
    code: "https://github.com/ErosNetto/TCC-Site-Venda-de-Curso",
    websiteUrl: "",
  },
  {
    id: 2,
    images: [ARedeSocial],
    technologies: ["js", "react", "node", "redux", "css", "mongodb"],
    isFavorite: true,
    type: "personal",
    code: "https://github.com/ErosNetto/A-Rede-Social",
    websiteUrl: "",
  },
  {
    id: 3,
    images: [CasaLuzImoveis],
    technologies: ["js", "react", "node", "redux", "css", "mongodb"],
    isFavorite: true,
    type: "freelance",
    code: "https://github.com/ErosNetto/CasaLuz",
    websiteUrl: "https://www.casaluzimoveis.com/",
  },
  {
    id: 4,
    images: [MiniBlog],
    technologies: ["js", "react", "node", "css", "firebase"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Projeto-MiniBlog",
    websiteUrl: "",
  },
  {
    id: 5,
    images: [MovieHub1, MovieHub2, MovieHub3, MovieHub4],
    technologies: ["js", "react", "node", "css"],
    isFavorite: true,
    type: "personal",
    code: "https://github.com/ErosNetto/MovieHub",
    websiteUrl: "https://moviehubreact.vercel.app/",
  },
  {
    id: 6,
    images: [TaskMaster1, TaskMaster2, TaskMaster3, TaskMaster4],
    technologies: ["ts", "react", "node", "css"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/TaskMaster",
    websiteUrl: "https://taskmaster-ts.vercel.app/",
  },
  {
    id: 7,
    images: [
      PalavraOculta1,
      PalavraOculta2,
      PalavraOculta3,
      PalavraOculta4,
      PalavraOculta5,
    ],
    technologies: ["js", "react", "node"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Palavra-Oculta/",
    websiteUrl: "https://erosnetto.github.io/Palavra-Oculta/",
  },
  {
    id: 8,
    images: [
      LandingPage1,
      LandingPage2,
      LandingPage3,
      LandingPage4,
      LandingPage5,
      LandingPage6,
      LandingPage7,
    ],
    technologies: ["html", "css", "js"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Landing-page",
    websiteUrl: "https://erosnetto.github.io/Landing-page/",
  },
  {
    id: 9,
    images: [SMMercearia],
    technologies: ["html", "css", "js"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Projeto-SM-Mercearia",
    websiteUrl: "https://erosnetto.github.io/SM-Mercearia/",
  },
];

export default projectsData;
