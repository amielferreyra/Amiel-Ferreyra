import './App.scss';
import About from './views/about/About';
import Skills from './views/skills/Skills';
import Portafolio from './views/portafolio/Portafolio';
import Contact from './views/contact/Contact';
import Home from './views/home/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Portafolio/>
      <Contact/>
    </div>
  );
}

export default App;
