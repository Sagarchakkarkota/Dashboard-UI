import React from "react";
import MainSection from "./MainSection";
import AsideSection from "./AsideSection";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

const Home = () => {
  return (
    <div className="flex  w-full ">
      <SideBar /> {/* taken 240px */}
      <div className=" bg-gradient-to-l from-[#F5D300] to-gray-200 w-full ">
        <Navbar />

        <div className="w-full flex justify-evenly">
          <MainSection />
          <AsideSection />
        </div>
      </div>
    </div>
  );
};

export default Home;