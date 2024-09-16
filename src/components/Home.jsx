import React from "react"

const Home = () => {
    return (
        <div className="z-20 flex flex-col items-center justify-center gap-2 text-center mt-[40vw] md:mt-44">
            <h1 className="font-space-grotesk font-semibold text-6xl sm:text-9xl tracking-[0.4rem] mb-6 bg-gradient-to-tr from-zinc-300 via-gray-400 to-slate-500 bg-clip-text text-transparent transition-all ease-out cursor-pointer">
                INNOVAGE TECH
            </h1>

            <p className="sm:text-2xl text-base w-80% px-6 font-space-grotesk bg-gradient-to-tl from-zinc-300 via-gray-400 to-slate-500 bg-clip-text text-transparent">Fueling Tomorrow’s Innovators to Transform the World of Technology </p>
        </div>
    )
};

export default Home;
