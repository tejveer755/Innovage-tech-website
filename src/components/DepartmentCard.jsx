import React from "react";

const DepartmentCard = ({ icon, title, description }) => {
    return (
        <div className="flex  my-auto rounded-xl bg-gradient-to-bl from-zinc-400 via-gray-400 to-slate-500 items-center justify-center  w-[400px] md:w-[550px]  mx-11 p-4 md:p-6">
            <div className="w-full md:w-2/5 h-auto p-3 flex items-center justify-center">
                <img src={icon} alt={title} className="w-[70%] h-auto my-auto" />
            </div>
            <div className="w-full md:w-3/5 flex justify-center flex-col h-auto text-start font-roboto text-slate-900">
                <h2 className="text-xl md:text-2xl font-medium">{title}</h2>
                <p className="text-sm md:text-base">{description}</p>
            </div>
        </div>
    );
};

export default DepartmentCard;
