import React, { useEffect } from "react";
import EventContainer from "../components/EventContainer";
import AOS from "aos";
import "aos/dist/aos.css";





const Eventpage = () => {
    const colors = [
        "bg-slate-400",
        "bg-slate-400",
        "bg-slate-400",
        "bg-slate-400",
        "bg-slate-400",
        "bg-slate-400",
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration (in milliseconds)
        });
    }, []);

    return (
        <>
            <div data-aos="zoom-in-right" className="z-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 h-fit shadow-inset-left-right" id="events">
                <h1 className="text-center mx-auto w-fit  text-slate-200 font-extrabold md:text-7xl text-5xl font-space-grotesk border-b-2 pb-4 ">Event Details</h1>
                <EventContainer
                    colors={colors}
                    index={1}
                />
                <EventContainer
                    colors={colors}
                    index={2}
                />

                <EventContainer
                    colors={colors}
                    index={3}
                />


            </div>

        </>
    );
};

export default Eventpage;
