import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import TechAndTools from "./components/TechAndTools/TechAndTools";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Intro />
      <AboutMe />
      <TechAndTools />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
