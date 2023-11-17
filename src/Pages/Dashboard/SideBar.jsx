import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import SideBarComp from "./SideBarComp";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="w-[240px]  bg-gradient-to-br from-[#08F7FE] to-white ">
      <div className="minlg:hidden sticky top-0 ">
        {!showSideBar && (
          <div
            className="p-6 "
            onClick={() => {
              setShowSideBar(true);
            }}
          >
            <CiMenuBurger />
          </div>
        )}
        {showSideBar && <SideBarComp setShowSideBar={setShowSideBar} />}
      </div>
      <div className="lg:hidden sticky top-0">
        <SideBarComp />
      </div>
    </div>
  );
};

export default SideBar;
