import React from "react";
import './components/Portafolio.scss'

function Portafolio(){
    return(
        <section className="portafolio" id="#portafolio">
            <h2 className="heading"><span>P</span>ortafolio</h2>
            <div className="portafolio-container">
                <div className="portafolio-box">
                    <img className="view" src=""  alt="" />
                    <div className="portafolio.layer">
                        <h4>Twenty five</h4>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div className="portafolio-box">
                    <img className="view" src=""  alt="" />
                    <div className="portafolio.layer">
                        <h4>Vatercor</h4>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portafolio;