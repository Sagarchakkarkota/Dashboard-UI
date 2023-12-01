import { AiFillMessage } from "react-icons/ai";
import { TbBellMinusFilled } from "react-icons/tb";
import profilepic from "../assets/profile.jpg";
import useGetUser from "../customHooks/useGetUser";

const Navbar = () => {
  const { service } = useGetUser();
  const userData = service?.data || {};

  return (
    <div className=" h-[100px]   w-full flex justify-between px-14 py-4 items-center  ">
      <div className="text-2xl font-bold h-[80%]">
        Dashboard
        <p className="text-sm text-gray-500">14th Aug 2023</p>
      </div>

      <div className="flex h-[80%] text-gray-500 gap-2 py-2">
        <div className=" p-2 flex items-center text-2xl border-[1px] border-gray-500 rounded-md">
          <AiFillMessage />
        </div>
        <div className=" p-2 flex items-center text-2xl border-[1px] border-gray-500  rounded-md">
          <TbBellMinusFilled />
        </div>

        <div className="flex justify-center items-center px-2 gap-1">
          <div className="w-full flex justify-center ">
            <img className="rounded-[30px] h-[40px]" src={profilepic} alt="" />
          </div>
          <div className="px-2">
            <h1 className="w-full flex justify-center text-md font-bold whitespace-nowrap  ">
              {userData?.name}
            </h1>
            <p className="w-full flex justify-center text-xs text-gray-500 whitespace-nowrap ">
              {userData?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
