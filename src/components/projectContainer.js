import React from "react";
import '../components-styles/projectContainer.css'

// IMPORTS DE MOTION: 
import { motion, useAnimationControls } from "framer-motion";

const ProjectContainer = ({ numero, name, stack, desc, linkToCode, linkToDeploy }) => {

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
        <motion.div className="project-container" whileHover={() => handleHover()} onHoverEnd={() => handleHoverEnd()}>
            <h4>
                Proyecto #{numero}
            </h4>
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

                <div className="links-cont">
                    <a href={linkToCode}>
                        ver codigo
                    </a>
                    <a href={linkToDeploy}>
                        ver proyecto
                    </a>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProjectContainer