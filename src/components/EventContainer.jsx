import React from "react";
import Marquee from "react-fast-marquee";

const EventContainer = ({ images, index }) => {
  return (
    <div
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} mt-16 md:mt-36`}
    >
      {/* Text Section */}
      <div className="w-[95%] text-center md:text-start md:w-1/2 py-10 px-8 md:px-16 mx-auto flex items-center justify-center text-slate-300 text-base font-medium sm:text-lg md:text-xl opacity-85 tracking-widest bg-[rgba(253,254,255,0.24)] backdrop-blur-3xl rounded-xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          iure, vero laborum earum aspernatur, saepe qui quod perferendis placeat
          at architecto nam! Praesentium excepturi ex reprehenderit suscipit hic,
          incidunt velit eveniet cupiditate, doloremque eos ipsum expedita!
        </p>
      </div>

      {/* Marquee Section */}
      <div className="mt-6 flex items-center md:mt-0 mx-auto w-full md:w-[45%]">
        <Marquee pauseOnHover gradient={false} speed={60}>
          {images.map((color, index) => (
            <div
              key={index}
              className={`mx-4 p-4  rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[300px]`}
            >
              {/* Placeholder for Image */}
                <img
                  src="https://via.placeholder.com/150" // Replace with actual image URLs 
                  alt={`Event ${index + 1}`}
                  className="object-cover w-full   h-full rounded-lg"
                />
              
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default EventContainer;
