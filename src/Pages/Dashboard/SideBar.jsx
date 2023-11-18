import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import SideBarComp from "./SideBarComp";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      {/* <div className="minlg:hidden   sticky top-0 ">
        {!showSideBar && (
          <div
            className="p-4  absolute top-4  "
            onClick={() => {
              setShowSideBar(true);
            }}
          >
            <CiMenuBurger />
          </div>
        )}
        {showSideBar && <SideBarComp setShowSideBar={setShowSideBar} />}
      </div> */}
      <SideBarComp />
    </>
  );
};

export default SideBar;
