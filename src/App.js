import './App.scss';
import About from './views/about/About';
import Skills from './views/skills/Skills';
import Portafolio from './views/portafolio/Portafolio';
import Contact from './views/contact/Contact';
import Home from './views/home/Home';
import Footer from './views/footer/footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Portafolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
