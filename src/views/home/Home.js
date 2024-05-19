import React from "react";
import './components/Home.scss'
import Navbar from "./components/Navbar";
import logo from "../../imagenes/header.png"

function Home(){
    return(
        <header id="#home">
            <Navbar/>
            <section className="home">
                <div className="home-content"  data-aos="fade-right" data-aos-duration="500">
                    <h1>
                        ¡Hola!, soy Amiel Ferreyra.
                        <br/>
                        <span>Desarrollador Front-End</span>  
                    </h1>
                    <p>Soy desarrollador Full Stack apasionado por los desafios y por el trabajo en equipo. Me especializo en Front-End pero estoy abierto a nuevas tecnologías y en constante aprendizaje.</p>
                    <div className="social-media">
                        <a href="https://github.com/amielferreyra" target="_blank" rel="noopener noreferrer"><box-icon name='github' type='logo' color='#ffffff' className="aHome" ></box-icon></a>
                        <a href="https://www.linkedin.com/in/amiel-ferreyra-51ab4b240/" target="_blank" rel="noopener noreferrer"><box-icon name='linkedin-square' type='logo' color='#ffffff' className="aHome" ></box-icon></a>
                    </div>
                    
                    <a href="https://drive.google.com/file/d/15iPsL-Tj4wL9RoQZCAjLhsxxhFHPqgdA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">Mi CV</a>
                </div>
                <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                    <img className="imgHome" src={logo}  alt="" />
                </div>
            </section>
        </header>
    );
}

export default Home;