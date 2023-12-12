import React from "react"; 
import './Home.scss'
import {Link} from 'react-scroll'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Amiel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="home" spy={true} smooth={true} offset={-50} duration={70} className="nav-link active" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" spy={true} smooth={true} offset={-50} duration={70} className="nav-link active" aria-current="page">Sobre mi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="skills" spy={true} smooth={true} offset={-50} duration={70} className="nav-link active" aria-current="page">Habilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="portafolio" spy={true} smooth={true} offset={-50} duration={70} className="nav-link active" aria-current="page">Portafolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" spy={true} smooth={true} offset={-50} duration={70} className="nav-link active" aria-current="page">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>        
    );
}

export default Navbar;