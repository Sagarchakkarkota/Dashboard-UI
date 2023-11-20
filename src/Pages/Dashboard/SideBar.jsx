import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import SideBarComp from "./SideBarComp";
import { Transition } from "@headlessui/react";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <div className="minlg:hidden    ">
        {!showSideBar && (
          <div
            className="p-4  absolute top-4 z-10  "
            onClick={() => {
              setShowSideBar(true);
            }}
          >
            <CiMenuBurger />
          </div>
        )}
        {/* {showSideBar && ( */}
        <Transition
          show={showSideBar}
          enter="transition-opacity duration-75"
          enterFrom="opacity-50"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <SideBarComp
            setShowSideBar={setShowSideBar}
            showSideBar={showSideBar}
          />
        </Transition>
        {/* )} */}

        {/* <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
          Toggle
        </button> */}
      </div>
      <div className="lg:hidden">
        <SideBarComp />
      </div>
    </>
  );
};

export default SideBar;
