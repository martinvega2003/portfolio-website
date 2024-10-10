import React from "react";
import '../pages-styles/hero.css'

//IMPORTS DE IMAGENESS
import img from '../images/pic.jpeg'

//IMPORTS DE DATA:
import { personalInfo, educacionInfo } from "../data/personal-info";

//REACT-ICONS:
import { FaAddressCard, FaChartLine, FaBook } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className="section hero">
            <div className="hero-top">
                {/* IZQUIERDA */}
                    <h1 className="heading">
                        Desarrollador web junior
                    </h1>
                    <h2 className="subheading">
                        hola, mi nombre es martin vega
                    </h2>
                    <h4 className="text">
                        Soy un desarrollador web junior que esta cursando la carrera de ingenieria informatica.
                        Me encuentro en el tercer curso de la carrera con un promedio superior a 4 de 5. He creado 
                        esta pagina para demostrar mis habilidades como desarrollador web. Espero que les puedan servir 
                        a alguien. Si quieres saber mas, abajo encontraras cosas como mis proyectos, informacion personal,
                        habilidades, etc.
                    </h4>

                {/* DERECHA 
                <div className="hero-right">
                    <div className="img-container">
                        <img src={img} />
                    </div>
                </div> */}
            </div>
            <div className="hero-bottom">
                <div className="info-container">
                    <div className="info-block">
                        <FaAddressCard className="r-icon" />
                        <h4>
                            Informacion personal
                        </h4>
                        <p>
                            <span>nombre: </span>{personalInfo.nombre} <br/>
                            <span>edad:</span> {personalInfo.edad} <br/>
                            <span>nacionalidad: </span> {personalInfo.nacionalidad} <br/>
                            <span>experiencia: </span> {personalInfo.Experiencia} <br/>
                            <span>area: </span> {personalInfo.area} <br/>
                        </p>
                    </div>

                    <div className="info-block">
                        <FaChartLine className="r-icon" />
                        <h4>
                            Objetivos
                        </h4>
                        <p>
                            Mis mas grandes metas son las de poder ayudar y aportar valor a la sociedad con mis habilidades, y poder vivir de ello. Conmigo te aseguraras de un empleado dispuesto a hacer todo lo posible por crear un mejor ambiente laboral, hacer todas tareas que me puedan pedir, y valorar el aprendizaje que una compania me pueda brindar.
                        </p>
                    </div>

                    <div className="info-block">
                        <FaBook className="r-icon" />
                        <h4>
                            Educacion
                        </h4>
                        <p>
                            <span>Bachillerato: </span> <br/> {educacionInfo.bachillerato} - {educacionInfo.bachillerEstado} - {educacionInfo.bachillerColegio} <br/>
                            <span>Carrera: </span> <br/> {educacionInfo.carrera} - {educacionInfo.carreraEstado} - {educacionInfo.carreraUniversidad} <br/>
                            <span>Informacion adicional: </span> <br/> {educacionInfo.extra}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero