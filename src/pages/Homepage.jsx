// Homepage.js
import React, { useState } from "react";
import Home from "../components/Home";
import DepartmentCard from "../components/DepartmentCard";
import aiIcon from "../assets/Automation.png";
import webdevIcon from "../assets/WebDevelopment.png";
import cyberIcon from "../assets/CyberSecurity.png";
import cloudCompIcon from "../assets/CloudComputing.png";


const Homepage = () => {
  const [departments, setDepartments] = useState([
    { icon: aiIcon, title: "AI and ML", description: "Cutting-edge AI and machine learning projects." },
    { icon: webdevIcon, title: "Web Dev", description: "Building modern websites and web applications." },
    { icon: cyberIcon, title: "Cyber Security", description: "Securing the future of technology." },
    { icon: cloudCompIcon, title: "Cloud and Blockchain", description: "Innovations in cloud computing and blockchain technology." },
  ]);

  return (
    <div className="mt-20 relative pb-24 h-fit overflow-hidden" id="home">
      <Home />
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto lg:grid-cols-4 gap-5 my-24 px-8">
        {departments.map((department, index) => (
          <DepartmentCard
            key={index}
            icon={department.icon}
            title={department.title}
            description={department.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
