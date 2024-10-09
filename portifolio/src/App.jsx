// CSS
import "./App.css";

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
  return (
    <div className="app">
      <LanguageProvider>
        <NavBar />
        <Intro />
        <AboutMe />
        <TechAndTools />
        <Projects />
        <Footer />
        <FloatingActionButton />
      </LanguageProvider>
    </div>
  );
}

export default App;
