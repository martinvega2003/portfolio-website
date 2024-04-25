import React from "react";
import '../components-styles/skillContainer.css'

const SkillContainer = ({ icon, name, experience, familiarity }) => {
    return (
        <div className="container skill">
            {icon}
            <h2>
                {name}
            </h2>
            <div className="data-container">
                <div className="exp-container">
                    <span>experiencia: </span>
                    <span className={experience >= 1 ? 'green circle' : 'yellow circle'}>{experience}</span>
                    <span>anos</span>
                </div>
                <div className="exp-container">
                    <span>familiaridad: </span>
                    <span className={familiarity >= 70 ? 'green circle' : 'yellow circle'}>{familiarity}%</span>
                    <span>porciento</span>
                </div>
            </div>
        </div>
    )
}

export default SkillContainer