import React from "react";
import '../pages-styles/footer.css'

// IMPORTS DE DATA:
import { contactInfo, contactIcons } from "../data/contact-info";

// IMPORTS DE MOTION:
import { motion, useAnimationControls } from "framer-motion";

const Footer = () => {

    //Framer-motion:
    const animationControls = useAnimationControls()

    //Funciones:
    const handleHover = () => {
        animationControls.start("hover")
    }

    const handleUnhover = () => {
        animationControls.start("unhover")
    }

    return (
        <section className="section footer">
            <div className="footer-c f-left">
                <h2 className="heading">
                    Mantengamonos al tanto
                </h2>
                <h4 className="text">
                    Abajo puedes ver mis demas redes sociales para obtener mas informacion sobre mi
                </h4>
                <div className="sm-container">
                    <a href={contactInfo.linkedin} className="sm-link">
                        {contactIcons.linkedin}
                    </a>
                    <a href={contactInfo.instagram} className="sm-link">
                        {contactIcons.instagram}
                    </a>
                    <a href={contactInfo.github} className="sm-link">
                        {contactIcons.github}
                    </a>
                </div>
            </div>

            <div className="footer-c f-right">
                <motion.div className="contact-box" whileHover={() => handleHover()} onHoverEnd={() => handleUnhover()} variants={{hover: {color: "var(--primary)", background: "var(--black)"}, unhover: {color: "var(--black)", background: "beige"}}} animate={animationControls}>
                    <motion.div initial={{right: "-15px", bottom: "-15px"}} variants={{hover: {right: "0px", bottom: "0px"}, unhover: {right: "-15px", bottom: "-15px"}}} animate={animationControls}></motion.div>
                    {contactIcons.email}
                    <p>
                        {contactInfo.email}
                    </p>
                </motion.div>

                <motion.div className="contact-box" whileHover={() => handleHover()} onHoverEnd={() => handleUnhover()} variants={{hover: {color: "var(--primary)", background: "var(--black)"}, unhover: {color: "var(--black)", background: "beige"}}} animate={animationControls}>
                    <motion.div initial={{right: "-15px", bottom: "-15px"}} variants={{hover: {right: "0px", bottom: "0px"}, unhover: {right: "-15px", bottom: "-15px"}}} animate={animationControls}></motion.div>
                    {contactIcons.telefono}
                    <p>
                        {contactInfo.telefono}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Footer