import React from "react";
import '../components-styles/projectContainer.css'

// IMPORTS DE MOTION: 
import { motion, useAnimationControls } from "framer-motion";

const ProjectContainer = ({ img, name, stack, desc, link, linkToCode }) => {

    //Frame-motion:
    const animationControls = useAnimationControls()

    //Funciones:
    const handleHover = () => {
        animationControls.start("show")
    }

    const handleHoverEnd = () => {
        animationControls.start("hide")
    }

    return (
        <motion.a href={link} className="project-container" whileHover={() => handleHover()} onHoverEnd={() => handleHoverEnd()}>
            <img src={img} />
            <motion.div className="descripcion" initial={{bottom: "-100%"}} variants={{show: {bottom: 0}, hide: {bottom: "-100%"}}} animate={animationControls}>
                <h2>
                    {name}
                </h2>
                <div className="stack">
                    {
                        stack.map(stackItem => {
                            return (
                                <h4>
                                    {stackItem}
                                </h4>
                            )
                        })
                    }
                </div>
                <p className="text">
                    {desc}
                </p>

                <a className="link-to-code" href={linkToCode}>
                    ver codigo
                </a>
            </motion.div>
        </motion.a>
    )
}

export default ProjectContainer