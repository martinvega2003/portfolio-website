import React from "react";
import '../components-styles/skillContainer.css'

const SkillContainer = ({ icon, name, experience }) => {
    return (
        <div className="container skill">
            {icon}
            <h2>
                {name}
            </h2>
            <div className="data-container">
                <div className="exp-container">
                    <p className="exp-text">
                        "{experience}"
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SkillContainer