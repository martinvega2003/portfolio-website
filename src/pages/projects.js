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
        <section className="section projects">
            <h2 className="heading">
                Projects
            </h2>
            <p className="text"> 
                Here you can see all the projects I made till today. I included the most important and big ones that required from all of my skills
            </p>
            <div className="projects-container">
                {
                    ProjectsInfo.map(project => {
                        return (
                            <ProjectContainer 
                                name={project.name}
                                img={img}
                                stack={project.techStack}
                                desc={project.desc}
                                link={project.githubLink}
                                linkToCode={project.linkToCode}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects