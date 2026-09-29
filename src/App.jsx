import About from "./Components/About";
import Contact from "./Components/Contact";
import Eduaction from "./Components/Education";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navabar from "./Components/Navabar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
    <div className="font-fira-sans ">

       <Navabar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Eduaction/>
      <Contact/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
