import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import { BiLogIn, BiSolidDashboard } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { RiArrowDropDownLine, RiTeamFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import profilepic from "../../assets/profile.jpg";
import useGetUser from "../../customHooks/useGetUser";
import useLogOut from "../../customHooks/useLogOut";
const SideBarComp = ({ setShowSideBar, showSideBar }) => {
  const [listitems, setListitems] = useState([
    { id: 1, icon: BiSolidDashboard, name: "Dashborad", path: "/" },
    { id: 2, icon: FcStatistics, name: "Statistics", path: "/" },
    { id: 3, icon: GrTransaction, name: "Transaction", path: "/trans" },
    { id: 4, icon: RiTeamFill, name: "Users", path: "/users" },
    { id: 5, icon: BsFileBarGraph, name: "Sell Reports", path: "/" },
    { id: 6, icon: IoMdSettings, name: "Settings", path: "/" },
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropid) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData("text/plain");
    const draggedItem = listitems.find((value) => value.id == draggedItemId);

    const updatedItems = listitems.filter((value) => draggedItemId != value.id);

    const targetIndex = updatedItems.findIndex((item) => item.id === dropid);
    if (targetIndex != 0) {
      updatedItems.splice(targetIndex + 1, 0, draggedItem);
      setListitems(updatedItems);
    } else {
      updatedItems.splice(targetIndex, 0, draggedItem);
      setListitems(updatedItems);
    }
  };
  const { service } = useGetUser();
  const userData = service?.data || {};
  const { handleLogout } = useLogOut();

  return (
    <div
      className={`w-[230px] h-screen  sticky top-0  py-2 px-4 flex flex-col justify-between bg-gradient-to-bl from-gray-100 to-gray-200 `}
    >
      <div>
        <div
          className="minlg:hidden absolute top-[25px] right-2"
          onClick={() => {
            setShowSideBar(false);
          }}
        >
          <RxCross1 />
        </div>
        <Link to="/">
          <h1 className="p-2 w-full flex justify-center font-bold text-2xl ">
            Niond
          </h1>
        </Link>
        <Disclosure>
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button>
                <div className="flex justify-between items-center w-[200px] btnlistSidebar hover:bg-gray-100 cursor-pointer text-xl font-bold">
                  <h1 className="">{open ? "Collapse" : "Extend"}</h1>
                  <RiArrowDropDownLine
                    className={` ${open ? "rotate-180 transform" : ""} `}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul className="flex flex-col items-center">
                  {listitems.map(({ path, id, name, icon: IconComponent }) => {
                    return (
                      <Link to={path} key={id}>
                        <li
                          draggable
                          onDragStart={(e) => handleDragStart(e, id)}
                          onDragOver={(e) => handleDragOver(e)}
                          onDrop={(e) => handleDrop(e, id)}
                          className="w-[180px] btnlistSidebar hover:bg-button_green cursor-pointer"
                        >
                          <span className="flex items-center">
                            <IconComponent />
                          </span>
                          <span className="whitespace-nowrap">{name}</span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <div className="w-full">
        <div>
          <div className="w-full flex justify-center py-2">
            <img className="rounded-[30px]" src={profilepic} alt="" />
          </div>
          <h1 className="w-full flex justify-center text-md font-bold ">
            {userData?.name}
          </h1>
          <p className="w-full flex justify-center text-xs text-gray-500 ">
            {userData?.email}
          </p>
        </div>

        <div
          onClick={handleLogout}
          className="w-full flex justify-center  items-center gap-3 p-4 text-md font-medium  hover:bg-button_green cursor-pointer"
        >
          <BiLogIn className="text-xl" />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default SideBarComp;
