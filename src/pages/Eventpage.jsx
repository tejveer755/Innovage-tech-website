import React, { useEffect } from "react";
import EventContainer from "../components/EventContainer";
// import "aos/dist/aos.css";





const Eventpage = () => {
    const colors = [
        "bg-slate-400",
        "bg-slate-400",
        "bg-slate-400",
        "bg-slate-400",
        "bg-slate-400",
        "bg-slate-400",
        "bg-slate-400",
    ];

    

    return (
        <>
            <div  id="events" className="z-20 bg-transparent py-24 h-fit shadow-inset-left-right" >
              
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
