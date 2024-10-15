// CSS
import "./App.css";

import { useState } from "react";

// Modal
import ProjectModal from "./components/ProjectModal/ProjectModal";

// Context
import { LanguageProvider } from "./context/LanguageContext";

// Components
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import TechAndTools from "./components/TechAndTools/TechAndTools";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import FloatingActionButton from "./components/FloatingActionButton/FloatingActionButton";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="app">
      <LanguageProvider>
        <NavBar />
        <Intro />
        <AboutMe />
        <TechAndTools />
        <Projects openModal={openModal} />
        <Footer />
        <FloatingActionButton />
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      </LanguageProvider>
    </div>
  );
}

export default App;
