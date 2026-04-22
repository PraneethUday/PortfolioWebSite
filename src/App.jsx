import Aurora from "./components/Aurora";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useParallax from "./hooks/useParallax";
import "./App.css";


function App() {
  useSmoothScroll();
  useParallax();

  return (
    <>
      <Aurora
        colorStops={["#5227FF", "#7cff67", "#5227FF"]}
        amplitude={1.0}
        blend={0.5}
      />
      <Navbar />
      <div className="content" style={{ paddingTop: "64px" }}>
        <Header />
        <About />
        <Projects />
        <Education />
        <Skills />
      </div>
    </>
  );
}

export default App;
