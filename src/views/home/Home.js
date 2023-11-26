import React from "react";
import './components/Home.scss'
import Navbar from "./components/Navbar";
import logo from "../../imagenes/header.png"

function Home(){
    return(
        <header id="#inicio">
            <Navbar/>
            <section className="home">
                <div className="home-content">
                    <h1>
                        ¡Hola!, soy Amiel Ferreyra.
                        <br/>
                        <span>desarrollador Front-End</span>  
                    </h1>
                    <p>Soy desarrollador Full Stack apasionado por los desafios y por el trabajo en equipo. Me especializo en Front-End pero estoy abierto a nuevas tecnologías y en constante aprendizaje.</p>
                    <div className="social-media">
                        <a href="#"><box-icon name='linkedin-square' type='logo' color='#ffffff' ></box-icon></a>
                        <a href="#"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                    </div>
                    
                    <a href="#" className="btn">Mi CV</a>
                </div>
                <div>
                    <img src={logo}  alt="" />
                </div>
            </section>
        </header>
    );
}

export default Home;