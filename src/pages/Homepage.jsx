import React from "react";
import Home from "../components/Home";
import ApplyBtn from "../components/ApplyBtn";

const Homepage = () => {
  return (
    <div className=" mt-24 relative  pb-24 h-screen overflow-hidden" id="home">
      <Home />
      <ApplyBtn />
    </div>
  );
};

export default Homepage;
