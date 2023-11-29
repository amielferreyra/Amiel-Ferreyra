import React from 'react';
import './components/About.scss'
import Amiel from '../../imagenes/Diseño sin título (1).png'

function About() {
    return(
        <section className='about' id="#about"> 
            <div className='about-img'>
                <img src={Amiel} alt=""/>
            </div>

            <div className='about-content'>
                <h2 className='heading'> Sobre <span>mi</span></h2>
                <h3>Desarrollador Front-End</h3>
                <p>Soy desarrollador Full Stack apasionado por los desafios y por el trabajo en equipo, ya que es una forma de intercambiar conocimientos y crecer profesionalmente. Me especializo en Front-End pero estoy abierto a nuevas tecnologías y en constante aprendizaje. Utilizo frameworks y librerías actuales para desarrollar interfaces de usuarios de alta calidad tanto del lado del cliente como del servidor (backend), principalmente con React (frontend).</p>
                <a href="#" className="btn">Contacto</a>
            </div>
        </section>
    );
}

export default About;