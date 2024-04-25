import './App.css';

//IMPORTE DE PAGES:
import Header from './pages/header';
import Hero from './pages/hero';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Faqs from './pages/faqs';
import Contact from './pages/contact';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">

      {/* HEADER STICKY */}

      {/* <header className="header">
          <div className="links-container">
              <a href="#habilidades" className="link">habilidades</a>
              <a href="#proyectos" className="link">proyectos</a>
              <a href="#preguntas" className="link">preguntas</a>
              <a href="#footer" className="link">redes</a>
              <a href="#contacto" className="link">contacto</a>
          </div>
      </header> */}

      {/* PAGES-COMPONENTS */}

      <Hero />
      <Skills id="habilidades" />
      <Projects id="proyectos" />
      <Faqs id="preguntas" />
      <Contact id="contacto" />
      <Footer id="#footer" />
      <Header />
    </div>
  );
}

export default App;
