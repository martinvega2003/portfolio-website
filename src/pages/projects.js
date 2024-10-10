import React from "react";
import '../pages-styles/projects.css'

//IMPORTS DE IMAGENES:
import img from '../images/project-placeholder.jpeg'

//IMPORTS DE DATA:
import { ProjectsInfo } from "../data/projects";

// IMPORTS DE COMPONENTES:
import ProjectContainer from "../components/projectContainer";

const Projects = () => {
    return (
        <section className="section projects" id="proyectos">
            <h2 className="heading">
                Proyectos
            </h2>
            <p className="text"> 
                Aca pueden ver los mejores proyectos en los que trabaje hasta ahora. De a poco fui mejorando mis habilidades, 
                asi que el proyecto numero 3 es el mejor ejemplo que tengo, un ecommerce fullstack con django y React, aunque 
                tambien tengo otro proyecto fullstack con express en el backend. 
                (El deployment de los proyectos fullstack muchas veces genera errores al hacer el fetching de la base de datos,
                 asi que si esto ocurre, es por eso).
            </p>
            <div className="projects-container">
                {
                    ProjectsInfo.map(project => {
                        return (
                            <ProjectContainer 
                                numero={project.numero}
                                name={project.name}
                                stack={project.techStack}
                                desc={project.desc}
                                linkToCode={project.linkToCode}
                                linkToDeploy={project.linkToDeploy}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects