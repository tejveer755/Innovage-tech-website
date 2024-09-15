import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import ApplyBtn from "../components/ApplyBtn";
import Divider from "../components/Divider";

const Homepage = () => {
  return (
    <div className="relative bg-[url('/src/assets/background-technology-desktop.jpg')] bg-cover bg-center h-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <ApplyBtn />
    </div>
  );
};

export default Homepage;
