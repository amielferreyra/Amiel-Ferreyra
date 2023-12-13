import React from "react";
import './components/Contact.scss'

function Contact(){
    return(
        <section id="#contact" className="contact">
            <h1><span>C</span>ontactame</h1>
            <div className="contact-box">
                <div className="links" data-aos="zoom-in-right">
                    <box-icon name='envelope'></box-icon>
                    <a href="#">E-mail</a>   
                </div>
                <div className="links" data-aos="zoom-in-left">
                    <box-icon type='logo' name='linkedin'></box-icon>
                    <a href="#">Linkedin</a>  
                </div>
            </div>
        </section>
    );
}

export default Contact;