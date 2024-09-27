import '../ourTeam.css'
import React from "react"

const TeamCard = ({name , role, image}) => {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <div className="card-content">
                <h3>{name}</h3>
                <p>{role}</p>
                <ul>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </div>
    )
};

export default TeamCard;
