import Aurora from "./components/Aurora";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import "./App.css";


function App() {
  return (
    <>
      <Aurora
        colorStops={["#5227FF", "#7cff67", "#5227FF"]}
        amplitude={1.0}
        blend={0.5}
      />
      <div className="content">
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
