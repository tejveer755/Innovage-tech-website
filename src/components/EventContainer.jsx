import React from "react";

const EventContainer = ({ colors, index }) => {
  return (
    <div
    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-1 md:mt-36`}
  >
      {/* Paragraph Section */}
      <div className="w-full text-center md:text-start md:w-1/2 py-20 px-8 md:px-16 mx-auto flex items-center justify-center text-slate-50 font-normal text-base sm:text-lg md:text-xl opacity-85 tracking-widest">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          iure, vero laborum earum aspernatur, saepe qui quod perferendis placeat
          at architecto nam! Praesentium excepturi ex reprehenderit suscipit hic,
          incidunt velit eveniet cupiditate, doloremque eos ipsum expedita!
        </p>
      </div>
      
      {/* Marquee Section */}
      <div className="overflow-hidden mx-auto md:mx-0 w-[90%] md:w-[50%] shadow-sm p-4">
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
