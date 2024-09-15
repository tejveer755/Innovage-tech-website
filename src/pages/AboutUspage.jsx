import React from "react"
import image from '../assets/product-market-fit.png'
import Divider from "../components/Divider";

const AboutUspage = () => {
    return (
        <div className="z-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 h-fit shadow-inset-left-right font-space-grotesk" id="about_us">
          
            <h1 className="text-center mx-auto w-fit  text-slate-200 font-extrabold text-7xl  border-b-2 pb-4 ">
                About Us
            </h1>
            <p className="text-center md:text-2xl md:tracking-widest leading-10 text-2xl capitalize w-[90%] md:w-[70%] mt-16 mx-auto text-slate-300 font-semibold">
                At Innovage Club, we believe that the future belongs to those who dare to innovate. As a vibrant community of tech enthusiasts, students, and innovators, we are driven by the desire to explore, learn, and create cutting-edge technology solutions that shape the future. Our club provides a dynamic platform for members to collaborate, share ideas, and turn concepts into reality.
            </p>
            <div className="flex w-[90%] flex-col-reverse md:flex-row my-32 mx-auto ">
                <div className="md:w-[50%] text-center md:text-start flex flex-col w-[100%] ">
                    <h2 className="w-fit  text-slate-200 font-extrabold text-5xl  border-b-2 pb-4 ">
                        Our Mission
                    </h2>
                    <p className=" md:text-2xl md:tracking-widest leading-10 text-2xl capitalize mt-9 text-slate-300 font-semibold">
                        Our mission is to foster a culture of innovation, creativity, and continuous learning. We aim to equip our members with the skills and knowledge needed to thrive in today’s rapidly evolving tech landscape. Through hands-on projects, workshops, and collaborative initiatives, we empower individuals to push the boundaries of what’s possible.
                    </p>
                    <p className="md:text-2xl md:tracking-widest leading-10 text-2xl capitalize mt-9 text-slate-300 font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur pariatur sequi itaque? Harum modi numquam rem id eius repellendus. Soluta sequi suscipit adipisci quae fugit modi repudiandae dolores in tempora?
                    </p>
                </div>
                <div className="md:w-[50%] w-[100%]">
                    <img src={image} className="w-[70%] md:ml-auto mx-auto h-auto object-cover object-center " alt="" />
                </div>
            </div>
    

        </div >
    )
};

export default AboutUspage;
