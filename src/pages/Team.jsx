import React from "react"
import "../ourTeam.css"
import { useState } from "react";
import harsimranImg from "../assets/members_images/harsimran.jpg"
import prabhImg from "../assets/members_images/prabh.jpg"
import ankitImg from "../assets/members_images/ankit.jpg"
import piysshImg from "../assets/members_images/piyssh.jpg"
import rahulImg from "../assets/members_images/rahul.jpg"
import shivanshImg from "../assets/members_images/shivansh.jpg"
import TeamCard from "../components/TeamCard";

const Team = () => {

    const [members, setMembers] = useState([
        { name: "Harsimran Singh", role: "President", image: harsimranImg },
        { name: "Prabhjot Singh ", role: "Web Dev Head", image: prabhImg },
        { name: "Ankit Raj", role: "Block Chain Head", image: ankitImg },
        { name: "Rahul", role: "AI/Machine Learning Head", image: rahulImg },
        { name: "Piyush Sharma", role: "Cybersecurity Head", image: piysshImg },
        { name: "Shivansh", role: "Photography Head", image: shivanshImg },
    ]);
    return (
        <section id="ourTeam">
            <span>meet our</span>
            <h2>Team</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, praesentium veritatis voluptatibus ut consequuntur quas consequatur omnis id rem obcaecati.</p>
            <span className="bg-watermark" >team</span>
            <div className="cards">
                {
                    members.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                        />
                    ))
                }
                {/* <div className="card">
                    <img src="harsimran.jpg" alt="Prabhjot Singh" />
                    <div className="card-content">
                        <h3>Harsimran Singh</h3>
                        <p>President</p>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img src="prabh.jpg" alt="Ankit Raj" />
                    <div className="card-content">
                        <h3>Prabhjot Singh</h3>
                        <p>Web Dev Head</p>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img src="ankit.jpg" alt="Ankit Raj" />
                    <div className="card-content">
                        <h3>Ankit Raj</h3>
                        <p>Block Chain Head</p>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img src="rahul ai ml.jpg" alt="Rahul" />
                    <div className="card-content">
                        <h3>Rahul</h3>
                        <p>AI/Machine Learning Head</p>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img src="piyssh.jpg" alt="Piyush Sharma" />
                    <div className="card-content">
                        <h3>Piyush Sharma</h3>
                        <p>Cybersecurity Head</p>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img src="shivansh photo.jpg" alt="Shivansh" />
                    <div className="card-content">
                        <h3>Shivansh</h3>
                        <p>Photography Head</p>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </section>

    )
};

export default Team;
