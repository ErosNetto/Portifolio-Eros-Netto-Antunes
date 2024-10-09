import "./CarouselTechTools.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

// SVGs
import JSLogo from "../../assets/techAndTools/javascript-logo.svg";
import TSLogo from "../../assets/techAndTools/typescript-logo.svg";
import NodeLogo from "../../assets/techAndTools/nodejs-logo.svg";
import ReactLogo from "../../assets/techAndTools/react-logo.svg";
import ReduxLogo from "../../assets/techAndTools/redux-logo.svg";
import CsharpLogo from "../../assets/techAndTools/csharp-logo.svg";
import MongoDBLogo from "../../assets/techAndTools/mongodb-logo.svg";
import MySQLLogo from "../../assets/techAndTools/mysql-logo.svg";
import HTMLLogo from "../../assets/techAndTools/html-logo.svg";
import CSSLogo from "../../assets/techAndTools/css-logo.svg";
import GitLogo from "../../assets/techAndTools/git-logo.svg";
import GitHubLogo from "../../assets/techAndTools/github-logo.svg";
import DockerLogo from "../../assets/techAndTools/docker-logo.svg";
import GoogleCloudLogo from "../../assets/techAndTools/googlecloud-logo.svg";
import VScodeLogo from "../../assets/techAndTools/vscode-logo.svg";
import PostmanLogo from "../../assets/techAndTools/postman-logo.svg";
import InsomniaLogo from "../../assets/techAndTools/insomnia-logo.svg";
import FigmaLogo from "../../assets/techAndTools/figma-logo.svg";

const CarouselTechTools = () => {
  const technologiesAndTools = [
    { title: "JavaScript", image: JSLogo },
    { title: "TypeScript", image: TSLogo },
    { title: "Node.js", image: NodeLogo },
    { title: "React", image: ReactLogo },
    { title: "Redux", image: ReduxLogo },
    { title: "Csharp", image: CsharpLogo },
    { title: "MongoDB", image: MongoDBLogo },
    { title: "MySQL", image: MySQLLogo },
    { title: "HTML5", image: HTMLLogo },
    { title: "CSS3", image: CSSLogo },
    { title: "Git", image: GitLogo },
    { title: "GitHub", image: GitHubLogo },
    { title: "Docker", image: DockerLogo },
    { title: "Google-Cloud", image: GoogleCloudLogo },
    { title: "VScode", image: VScodeLogo },
    { title: "Postman", image: PostmanLogo },
    { title: "Insomnia", image: InsomniaLogo },
    { title: "Figma", image: FigmaLogo },
  ];

  return (
    <div className="carouse-tech-tools">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="swiper"
      >
        {technologiesAndTools.map((tech) => (
          <SwiperSlide key={tech.title}>
            <div className="tech-item">
              <img src={tech.image} alt={tech.title} className="tech-logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTechTools;
