import React from "react";
import './components/Skills.scss'
import javascript from '../../imagenes/icons8-javascript.svg'
import html from '../../imagenes/icons8-html-5.svg'
import css from '../../imagenes/icons8-css3.svg'
import sass from '../../imagenes/icons8-sass.svg'
import bootstrap from '../../imagenes/icons8-bootstrap.svg'
import reactjs from '../../imagenes/icons8-react.svg'
import laravel from '../../imagenes/laravel.svg'
import git from '../../imagenes/git.svg'
import github from '../../imagenes/github-svgrepo-com.svg'
import figma from '../../imagenes/icons8-figma.svg'
import php from '../../imagenes/php.png'

function Skills(){
    return(
        <section id="skills" className="skills">
            <div className="skills-details-container">
                <h1 className="tituloskills"><span>H</span>abilidades</h1>
                <div className="center-about">
                    <div className="about-containers">
                        <div className="details-containers" data-aos="fade-up">
                            <h2 className="habilidades-sub-titulo">Front-End</h2>
                            <div className="article-container">
                                <article>
                                    <img className="icon" src={html}  alt="" />
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Avanzado</p>         
                                    </div>
                                </article>
                                <article>
                                    <img className="icon" src={css}  alt="" />
                                    <div>
                                        <h3>CSS</h3>
                                        <p>Intermedio</p>         
                                    </div>
                                </article>                            <article>
                                    <img className="icon" src={sass}  alt="" />
                                    <div>
                                        <h3>SASS</h3>
                                        <p>Intermedio</p>         
                                    </div>
                                </article>                            <article>
                                    <img className="icon" src={bootstrap}  alt="" />
                                    <div>
                                        <h3>Bootstrap</h3>
                                        <p>Intermedio</p>         
                                    </div>
                                </article>                            <article>
                                    <img className="icon" src={reactjs}  alt="" />
                                    <div>
                                        <h3>React.js</h3>
                                        <p>Intermedio</p>         
                                    </div>
                                </article>                            <article>
                                    <img className="icon" src={javascript}  alt="" />
                                    <div>
                                        <h3>Javascript</h3>
                                        <p>Basico</p>         
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="details-containers" data-aos="fade-up">
                            <h2 className="habilidades-sub-titulo">Back-End</h2>
                            <div className="article-container">
                                <article>
                                    <img className="icon" src={php}  alt="" />
                                    <div>
                                        <h3>PHP</h3>
                                        <p>Basico</p>         
                                    </div>
                                </article>
                                <article>
                                    <img className="icon" src={laravel}  alt="" />
                                    <div>
                                        <h3>Laravel</h3>
                                        <p>Basico</p>         
                                    </div>
                                </article>                            
                            </div>
                        </div>
                        <div className="details-containers" data-aos="fade-up">
                            <h2 className="habilidades-sub-titulo">Control de versiones</h2>
                            <div className="article-container">
                                <article>
                                    <img className="icon" src={git}  alt="" />
                                    <div>
                                        <h3>Git</h3>
                                        <p>Basico</p>         
                                    </div>
                                </article>
                                <article>
                                    <img className="icon" src={github}  alt="" />
                                    <div>
                                        <h3>Git-hub</h3>
                                        <p>Basico</p>         
                                    </div>
                                </article>                                                        
                            </div>
                        </div>
                        <div className="details-containers" data-aos="fade-up">
                            <h2 className="habilidades-sub-titulo">Diseño</h2>
                            <div className="article-container">                           
                                <article>
                                    <img className="icon" src={figma}  alt="" />
                                    <div>
                                        <h3>Figma</h3>
                                        <p>Basico</p>         
                                    </div>
                                </article>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;