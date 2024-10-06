import React, { useState } from "react";
import DepartmentCard from "../components/DepartmentCard";
import aiIcon from "../assets/Automation.png";
import webdevIcon from "../assets/WebDevelopment.png";
import cyberIcon from "../assets/CyberSecurity.png";
import cloudCompIcon from "../assets/CloudComputing.png";
import photographyIcon from "../assets/Photography.png";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";



const Homepage = () => {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      icon: aiIcon,
      title: "AI and ML",
      description: "Explore the forefront of technology with projects in artificial intelligence and machine learning, harnessing data to create intelligent solutions that transform industries."
    },
    {
      id: 2,
      icon: webdevIcon,
      title: "Web Development",
      description: "Dive into the dynamic world of web development, where you can design and build responsive websites and applications that provide exceptional user experiences."
    },
    {
      id: 3,
      icon: cyberIcon,
      title: "Cyber Security",
      description: "Join the critical fight against cyber threats by learning how to protect systems and data, ensuring a secure digital environment for individuals and organizations."
    },
    {
      id: 4,
      icon: cloudCompIcon,
      title: "Cloud and Blockchain",
      description: "Discover innovations in cloud computing and blockchain technology, focusing on scalable solutions and decentralized systems that revolutionize data management."
    },
    {
      id: 5,
      icon: photographyIcon,
      title: "Photography",
      description: "Capture the essence of life through the lens, combining technical skills with artistic vision to create stunning visual narratives."
    },
  ]);



  return (
    <>
    {/* <Background/> */}
      <div className="mt-20 relative pb-24 min-h-[100vh] h-fit overflow-hidden" id="home">
        <div className="z-20 flex flex-col items-center justify-center gap-2 text-center mt-[27vw] min-h-80 md:my-36">
          <h1
            className="font-space-grotesk font-bold text-[4.5rem] sm:text-[10rem] tracking-[0.2rem]  mb-6 bg-gradient-to-tr from-zinc-300 via-gray-400 to-slate-500 bg-clip-text text-transparent transition-all ease-out"
          >
            <Typewriter
              words={["IGNITE TECH", "DRIVE INNOVATION", "INNOVAGE TECH"]}
              loop={1}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={800}
            />
          </h1>

          <p className="sm:text-2xl text-base w-80% px-6 font-space-grotesk bg-gradient-to-tl mb-16 md:mb-0 from-zinc-300 via-gray-400 to-slate-500 bg-clip-text text-transparent">
            Fueling Tomorrow’s Innovators to Transform the World of Technology
          </p>
        </div>

        <Marquee
          pauseOnHover
         
        >
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              icon={department.icon}
              title={department.title}
              description={department.description}
            />
          ))}
        </Marquee>




      </div>

    </>

  );
};

export default Homepage;
