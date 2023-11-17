import React from "react";
import { BiLogIn, BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { FcStatistics } from "react-icons/fc";
import { RiTeamFill } from "react-icons/ri";
import { BsFileBarGraph } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import profilepic from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
const SideBarComp = ({ setShowSideBar }) => {
  // const [draggedItem, setDraggedItem] = useState(null);
  const Listitems = [
    { id: 1, icon: BiSolidDashboard, name: "Dashborad", path: "" },
    { id: 2, icon: FcStatistics, name: "Statistics", path: "" },
    { id: 3, icon: GrTransaction, name: "Transaction", path: "" },
    { id: 4, icon: RiTeamFill, name: "Users", path: "/users" },
    { id: 5, icon: BsFileBarGraph, name: "Sell Reports", path: "" },
    { id: 6, icon: IoMdSettings, name: "Settings", path: "" },
  ];
  // const handleDragStart = (e, id) => {
  //   event.dataTransfer.setData("Text", id);
  // };

  // const handleDragOver = (e) => {
  //   e.preventDefault()
  // };
  // const handleDrop = (e, id) => {
  // e.preventDefault();
  // };

  return (
    <div className="  h-screen  sticky top-0  w-full py-2 px-6 flex flex-col justify-between">
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
        <ul>
          {Listitems.map(({ id, icon: IconComponent, name, path }) => (
            <Link to={path} key={id}>
              <li
                // draggable
                // onDragStart={(e) => handleDragStart(e, id)}
                // onDragOver={(e) => handleDragOver(e)}
                // onDrop={(e) => handleDrop(e, id)}
                className="w-[200px] btnlistSidebar hover:bg-button_green cursor-pointer"
              >
                <span className="flex items-center">
                  <IconComponent />
                </span>
                <span className="whitespace-nowrap">{name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <div>
          <div className="w-full flex justify-center py-2">
            <img className="rounded-[30px]" src={profilepic} alt="" />
          </div>
          <h1 className="w-full flex justify-center text-md font-bold ">
            Nora Watson
          </h1>
          <p className="w-full flex justify-center text-xs text-gray-500 ">
            Sale Manager
          </p>
        </div>

        <div className="w-full flex justify-center  items-center gap-3 py-10 text-md font-medium ">
          <BiLogIn className="text-xl" />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default SideBarComp;
