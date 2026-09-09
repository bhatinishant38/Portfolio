import About from "./Components/About";
import Contact from "./Components/Contact";
import Eduaction from "./Components/Education";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
    <div className="font-fira-sans ">

    
      <Home />
      <About />
      <Skills />
      <Projects />
      <Eduaction/>
      <Contact/>
      </div>
    </>
  );
}

export default App;
