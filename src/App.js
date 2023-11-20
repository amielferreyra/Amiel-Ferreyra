import './App.css';
import About from './views/about/About';
import Skills from './views/skills/skills';
import Portafolio from './views/portafolio/portafolio';
import Contact from './views/contact/contact';
import Home from './views/home/home';

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
