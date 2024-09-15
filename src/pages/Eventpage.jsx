import React from "react";
import EventContainer from "../components/EventContainer";
import Divider from "../components/Divider";

const colors = [
    "bg-slate-400",
    "bg-slate-400",
    "bg-slate-400",
    "bg-slate-400",
    "bg-slate-400",
    "bg-slate-400",

    // Add more colors as needed
];

const Eventpage = () => {
    return (
        <>
            <div className="z-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 h-fit shadow-inset-left-right" id="events">
                <h1 className="text-center mx-auto w-fit  text-slate-200 font-extrabold text-7xl font-space-grotesk border-b-2 pb-4 ">Event Details</h1>
                <EventContainer
                    colors={colors}
                    dir={'flex-row'}
                    slide={"left"}
                />
                <EventContainer
                    colors={colors}
                    dir={'flex-row-reverse'}
                    slide={"right"}
                />
                <EventContainer
                    colors={colors}
                    dir={'flex-row'}
                    slide={"left"}
                />

                
            </div>

        </>
    );
};

export default Eventpage;
