import React from "react";
import '../pages-styles/header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="links-container">
                <a href="#habilidades" className="link">habilidades</a>
                <a href="#proyectos" className="link">proyectos</a>
                <a href="#preguntas" className="link">preguntas</a>
                <a href="#footer" className="link">redes</a>
                <a href="#contacto" className="link">contacto</a>
            </div>
        </header>
    )
}

export default Header