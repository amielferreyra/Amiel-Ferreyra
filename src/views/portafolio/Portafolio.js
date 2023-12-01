import React from "react";
import './components/Portafolio.scss'
import twenty from '../../imagenes/view-twenty-five.PNG'
import vater from '../../imagenes/view-vatercor.PNG'

function Portafolio(){
    return(
        <section className="portafolio" id="#portafolio">
            <h2 className="heading"><span>P</span>ortafolio</h2>
            <div className="portafolio-container">
                <div className="portafolio-box">
                    <img className="view" src={twenty}  alt="" />
                    <div className="portafolio-layer">
                        <h4>Twenty five</h4>
                        <a href="#" className="hi">
                            <box-icon name='link-external'></box-icon>
                        </a>
                    </div>
                </div>
                <div className="portafolio-box">
                    <img className="view" src={vater}  alt="" />
                    <div className="portafolio-layer">
                        <h4>Vatercor</h4>
                        <a href="#"  className="hi">
                            <box-icon name='link-external'></box-icon>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portafolio;