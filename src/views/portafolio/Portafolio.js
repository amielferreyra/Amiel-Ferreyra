import React from "react";
import './components/Portafolio.scss'
import twenty from '../../imagenes/view-twenty-five.PNG'
import vater from '../../imagenes/view-vatercor.PNG'
import portafolio from '../../imagenes/portafolio_imagen.PNG'

function Portafolio(){
    return(
        <section className="portafolio" id="#portafolio">
            <h2 className="heading"><span>P</span>ortafolio</h2>
            <div className="portafolio-container">
                <div className="portafolio-box" data-aos="zoom-in">
                    <img className="view" src={twenty}  alt="" />
                    <div className="portafolio-layer">
                        <h4>Twenty five</h4>
                            <div className="ho">
                                <a href="https://amielferreyra.github.io/twentyfive.github.io/" target="_blank" rel="noopener noreferrer"  className="hi">
                                    <box-icon name='link-external'></box-icon>
                                </a>
                                <a href="https://github.com/amielferreyra/twentyfive.github.io" target="_blank" rel="noopener noreferrer" className="hi">
                                    <box-icon  name='github' type='logo'></box-icon>
                                </a>                        
                        </div>
                    </div>
                </div>
                <div className="portafolio-box" data-aos="zoom-in">
                    <img className="view" src={vater}  alt="" />
                    <div className="portafolio-layer">
                        <h4>Vatercor</h4>
                            <div className="ho">
                                <a href="https://amielferreyra.github.io/vatercor.github.io/" target="_blank" rel="noopener noreferrer"  className="hi">
                                    <box-icon name='link-external'></box-icon>
                                </a>
                                <a href="https://github.com/amielferreyra/vatercor.github.io" target="_blank" rel="noopener noreferrer" className="hi">
                                    <box-icon name='github' type='logo'></box-icon>
                                </a>                        
                            </div>

                    </div>
                </div>
                <div className="portafolio-box" data-aos="zoom-in">
                    <img className="view" src={portafolio}  alt="" />
                    <div className="portafolio-layer">
                        <h4>Vatercor</h4>
                            <div className="ho">
                                <a href="https://amielferreyra.com/" target="_blank" rel="noopener noreferrer"  className="hi">
                                    <box-icon name='link-external'></box-icon>
                                </a>
                                <a href="https://github.com/amielferreyra/Amiel-Ferreyra" target="_blank" rel="noopener noreferrer" className="hi">
                                    <box-icon name='github' type='logo'></box-icon>
                                </a>                        
                            </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portafolio;