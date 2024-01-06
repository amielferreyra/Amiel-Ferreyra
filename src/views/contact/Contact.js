import React from "react";
import './components/Contact.scss'

function Contact(){
    return(
        <section id="#contact" className="contact">
            <h1 className="heading"><span>C</span>ontactame</h1>
            <div className="contact-box">
                <div className="links" data-aos="zoom-in-right">
                    <box-icon name='envelope'></box-icon>
                    <a href="mailto:amiel.ferrari@gmail.com" target="_blank" rel="noopener noreferrer">E-mail</a>   
                </div>
                <div className="links" data-aos="zoom-in-left">
                    <box-icon type='logo' name='linkedin'></box-icon>
                    <a href="https://www.linkedin.com/in/amiel-ferreyra-51ab4b240/" target="_blank" rel="noopener noreferrer">Linkedin</a>  
                </div>
            </div>
        </section>
    );
}

export default Contact;