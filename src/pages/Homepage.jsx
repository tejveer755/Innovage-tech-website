import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import ApplyBtn from "../components/ApplyBtn";
import Divider from "../components/Divider";

const Homepage = () => {
  return (
    <div className=" relative  pb-24 h-screen overflow-hidden">
      <Navbar />
      <Home />
      <ApplyBtn />
    </div>
  );
};

export default Homepage;
