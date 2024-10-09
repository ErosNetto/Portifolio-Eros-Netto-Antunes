// Projects images
import SiteVendaDeCurso from "../assets/projects/site-venda-de-curso.webp";
import ARedeSocial from "../assets/projects/a-rede-social.webp";
import CasaLuzImoveis from "../assets/projects/casa-luz-imoveis.webp";
import MiniBlog from "../assets/projects/miniblog.webp";
// import MovieHub from "../assets/projects/movie-hub.webp";
// import TaskMaster from "../assets/projects/task-master.webp";
import PalavraOculta from "../assets/projects/palavra-oculta.webp";
import LandingPage from "../assets/projects/landing-page.webp";
import SMMercearia from "../assets/projects/sm-mercearia.webp";

const projectsData = [
  {
    id: 1,
    title: "Site Venda de Curso",
    description:
      "Este é o meu Trabalho de Conclusão de Curso para o Técnico em Informática. O projeto consiste em um Site de Venda de Cursos Online, que foi inspirado no website da Udemy.",
    image: SiteVendaDeCurso,
    technologies: ["js", "react", "node", "redux", "css", "mySQL"],
    isFavorite: true,
    type: "personal",
    code: "https://github.com/ErosNetto/TCC-Site-Venda-de-Curso",
    website: "",
  },
  {
    id: 2,
    title: "A Rede Social",
    description: "Projeto de uma rede social parecida com o Instagram.",
    image: ARedeSocial,
    technologies: ["js", "react", "node", "redux", "css", "mongodb"],
    isFavorite: true,
    type: "personal",
    code: "https://github.com/ErosNetto/A-Rede-Social",
    website: "",
  },
  {
    id: 3,
    title: "Casa Luz Imoveis",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: CasaLuzImoveis,
    technologies: ["js", "react", "node", "redux", "css", "mongodb"],
    isFavorite: true,
    type: "freelance",
    code: "https://github.com/ErosNetto/CasaLuz",
    website: "https://casaluzimoveis.com/",
  },
  {
    id: 4,
    title: "MiniBlog",
    description: "Este projeto consiste em um website de um MiniBlog.",
    image: MiniBlog,
    technologies: ["js", "react", "node", "context", "css", "firebase"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Projeto-MiniBlog",
    website: "https://erosnetto.github.io/Projeto-MiniBlog/",
  },
  {
    id: 5,
    title: "MovieHub",
    description:
      "Projeto de uma biblioteca de filmes criada com React e integração com a API do TMDB.",
    // image: MovieHub,
    technologies: ["js", "react", "node", "css"],
    isFavorite: true,
    type: "personal",
    code: "https://github.com/ErosNetto/MovieHub",
    website: "",
  },
  {
    id: 6,
    title: "TaskMaster",
    description:
      "Projeto de uma lista de tarefas simples, desenvolvida utilizando React e TypeScript.",
    // image: TaskMaster,
    technologies: ["ts", "react", "node", "css"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/TaskMaster",
    website: "",
  },
  {
    id: 7,
    title: "Palavra Oculta",
    description: "Jogo interativo de adivinhação de palavras com dicas.",
    image: PalavraOculta,
    technologies: ["js", "react", "node"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Projeto-Palavra-Oculta",
    website: "https://erosnetto.github.io/Projeto-Palavra-Oculta/",
  },
  {
    id: 8,
    title: "Landing page",
    description: "Uma Landing page simples.",
    image: LandingPage,
    technologies: ["html", "css", "js"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Landing-page",
    website: "https://erosnetto.github.io/Landing-page/",
  },
  {
    id: 9,
    title: "SM-Mercearia",
    description:
      "Meu primeiro projeto desenvolvido durante o curso de TI é um site simples criado para uma mercearia.",
    image: SMMercearia,
    technologies: ["html", "css", "js"],
    isFavorite: false,
    type: "personal",
    code: "https://github.com/ErosNetto/Projeto-SM-Mercearia",
    website: "https://erosnetto.github.io/Projeto-SM-Mercearia/",
  },
];

export default projectsData;
