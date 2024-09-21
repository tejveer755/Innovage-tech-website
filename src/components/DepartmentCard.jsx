import React from "react"

const DepartmentCard = ({
    icon, title, description
}) => {
    console.log(icon);

    return (

        <div className="flex  mx-auto rounded-xl bg-gradient-to-bl from-zinc-400 via-gray-400 to-slate-500 items-center justify-center hover:scale-105  transition-all duration-300 ease-in-out">
            <div className="w-[40%] h-full p-3 flex items-center">
                <img src={icon} alt="" className="w-[80%] h-auto my-auto" />
            </div>
            <div className="w-[60%] flex  justify-center flex-col h-full text-start font-roboto text-slate-900t">
                <h2 className="text-2xl font-medium">
                    {title}
                </h2>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default DepartmentCard;
