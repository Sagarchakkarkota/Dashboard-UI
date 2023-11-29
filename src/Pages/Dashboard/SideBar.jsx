import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import SideBarComp from "./SideBarComp";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <div className="minlg:hidden">
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
        <Transition
          show={showSideBar}
          className="absolute top-0 left-0"
          enter="transition ease-in-out duration-1000 transform"
          enterFrom="translate-x-[-240px]"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-[-240px]"
        >
          <SideBarComp
            setShowSideBar={setShowSideBar}
            showSideBar={showSideBar}
          />
        </Transition>
      </div>
      <div className="lg:hidden">
        <SideBarComp />
      </div>
    </>
  );
};

export default SideBar;
