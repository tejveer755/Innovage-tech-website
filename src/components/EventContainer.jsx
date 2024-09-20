import React from "react";

const EventContainer = ({ colors, index }) => {
  return (
    <div
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-7 mt-16 md:mt-36`}
    >
      {/* Paragraph Section */}
      <div className="w-[95%] text-center md:text-start md:w-1/2 py-10 px-8 md:px-16 mx-auto flex items-center justify-center  text-slate-300  ml-auto  text-base font-medium sm:text-lg md:text-xl opacity-85 tracking-widest bg-[rgba(253,254,255,0.24)] backdrop-blur-3xlxl backdrop-opacity-0 rounded-xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          iure, vero laborum earum aspernatur, saepe qui quod perferendis placeat
          at architecto nam! Praesentium excepturi ex reprehenderit suscipit hic,
          incidunt velit eveniet cupiditate, doloremque eos ipsum expedita!
        </p>
      </div>

      {/* Marquee Section */}
      <div className="relative overflow-hidden mx-auto md:mx-0 w-[90%] md:w-[45%] ">
        <div className="marquee-content flex gap-4 items-center animate-marquee">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-28 h-80 rounded-lg ${color}`}
              style={{ flex: '0 0 400px' }}
            >
              {index}
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default EventContainer;
