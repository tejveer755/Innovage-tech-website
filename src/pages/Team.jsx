import React from "react"
import "../ourTeam.css"
import { useState } from "react";
import harsimranImg from "../assets/members_images/harsimran.jpg"
import rishabhImg from "../assets/members_images/rishabh.jpg"
import prabhImg from "../assets/members_images/prabh.jpg"
import ankitImg from "../assets/members_images/ankit.jpg"
import piysshImg from "../assets/members_images/piyssh.jpg"
import rahulImg from "../assets/members_images/rahul.jpg"
import shivanshImg from "../assets/members_images/shivansh.jpg"
import rachitImg from "../assets/members_images/rachit.jpg"
import sumitImg from "../assets/members_images/sumit.jpg"
import TeamCard from "../components/TeamCard";

const Team = () => {

    const [members, setMembers] = useState([
        { name: "Harsimran Singh", role: "President", image: harsimranImg },
        { name: "Rishabh Lambha", role: "President", image: rishabhImg },
        { name: "Prabhjot Singh ", role: "Web Dev Head", image: prabhImg },
        { name: "Ankit Raj", role: "Block Chain Head", image: ankitImg },
        { name: "Rahul", role: "AI/Machine Learning Head", image: rahulImg },
        { name: "Piyush Sharma", role: "Cybersecurity Head", image: piysshImg },
        // { name: "Shivansh", role: "Photography Head", image: shivanshImg },
        { name: "Sumit", role: "Photography Head", image: sumitImg },
        { name: "Rachit", role: "Management Head", image: rachitImg },
    ]);
    return (
        <section id="ourTeam">
            <span>meet our</span>
            <h2>Team</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, praesentium veritatis voluptatibus ut consequuntur quas consequatur omnis id rem obcaecati.</p>
            {/* <span className="bg-watermark" >team</span> */}
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
              
            </div>
        </section>

    )
};

export default Team;
