import React from "react";
import '../pages-styles/contact.css'

const Contact = () => {
    return (
        <section className="section contact" id="contacto">
            <h2 className="heading">
                Contactame!
            </h2>
            <form onSubmit={e => e.preventDefault}>
                <div className="inputs-container">
                    <input type="text" placeholder="Introduce tu nombre: " className="input-nombre" />
                    <input type="text" placeholder="Introduce tu correo electronico: " className="input-email" />
                </div>
                <div className="btn-container">
                    <button className="submit-btn">
                        Enviar
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact