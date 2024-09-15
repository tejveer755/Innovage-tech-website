import React from "react";

const ApplyBtn = () => {
    return (
        <button className="text-gray-900 bg-gray-100 mx-auto hover:text-gray-950 hover:font-semibold hover:scale-110 transition-all ease-in font-medium rounded-3xl text-2xl md:text-xl px-5 py-2.5 text-center flex items-center dark:focus:ring-gray-500  mt-20 "
        >
            <a href="#">APPLY NOW</a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-up-right"
            >
                <path d="M13 5H19V11"></path>
                <path d="M19 5L5 19"></path>
            </svg>
        </button>
    );
};

export default ApplyBtn;
