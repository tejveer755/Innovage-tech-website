import React from "react";
import Marquee from "react-fast-marquee";

const EventContainer = ({ colors, index }) => {
  return (
    <div
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} mt-16 md:mt-36`}
    >
      <div className="w-[95%] text-center md:text-start md:w-1/2 py-10 px-8 md:px-16 mx-auto flex items-center justify-center  text-slate-300  ml-auto  text-base font-medium sm:text-lg md:text-xl opacity-85 tracking-widest bg-[rgba(253,254,255,0.24)] backdrop-blur-3xl backdrop-opacity-0 rounded-xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          iure, vero laborum earum aspernatur, saepe qui quod perferendis placeat
          at architecto nam! Praesentium excepturi ex reprehenderit suscipit hic,
          incidunt velit eveniet cupiditate, doloremque eos ipsum expedita!
        </p>
      </div>

      {/* Marquee Section */}
      <div className={`mt-6  md:mt-0 mx-auto  w-[100%] md:w-[45%]`}>

        <Marquee
          pauseOnHover
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-[500px] mx-7 h-80 rounded-lg ${color}`}
            >
              {index}
            </div>
          ))}
        </Marquee>

      </div>


    </div>
  );
};

export default EventContainer;