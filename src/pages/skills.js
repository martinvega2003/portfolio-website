import React from "react";
import '../pages-styles/skills.css'

//IMPORTS DE DATA:
import { skillsInfo } from "../data/skills";

//IMPORTS DE COMPONENTESS:
import SkillContainer from "../components/skillContainer";

const Skills = () => {
    return (
        <section className="section skills" id="habilidades">
            <div className="skills-container">
                {
                    skillsInfo.map(skill => {
                        return (
                            <SkillContainer
                                icon={skill.icon}
                                name={skill.name}
                                experience={skill.experience}
                                familiarity={skill.familiarity}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills