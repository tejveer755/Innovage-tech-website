import React from "react";

const EventContainer = ({ colors, dir }) => {
  return (
    <div className={`flex  ${dir} mt-36`}>
      {/* Marquee Section */}
      <div className="w-full md:w-1/2 text-center ml-0 overflow-hidden relative z-20">
        {/* Left and right shadows */}
        <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-gray-900 opacity-50 pointer-events-none z-30"></div>
        <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-gray-900 opacity-50 pointer-events-none z-30"></div>

        <div className={`absolute inset-0 flex animate-marquee`}>
          <div className="flex space-x-8 my-auto z-0" style={{ width: '100%' }}>
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-9/12 h-80 rounded-lg ${color}`}
                style={{ flex: '0 0 60%' }}
              ></div>
            ))}
          </div>
        </div>
      </div>


      {/* Event Details Section */}
      <div className="w-full md:w-1/2 py-20 px-8 md:px-16 mx-auto flex items-center justify-center  text-slate-50 font-normal text-xl opacity-85 tracking-widest">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          iure, vero laborum earum aspernatur, saepe qui quod perferendis placeat
          at architecto nam! Praesentium excepturi ex reprehenderit suscipit hic,
          incidunt velit eveniet cupiditate, doloremque eos ipsum expedita!
        </p>
      </div>
    </div>
  );
};

export default EventContainer;
