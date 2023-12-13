import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import MemberProfile from "./MemberProfile";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
const ListTeamMember = ({ value, handleEdit, handleDelete }) => {
  const [show, setShow] = useState(false);
  const { id, name, gender } = value;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/members/${id}`);
  };
  return (
    <div className="relative">
      {/* // <Link to={`/members`}> */}
      <div className="flex items-center justify-between flex-row cursor-pointer gap-4 my-3 bg-gray-200  px-2 py-1 rounded-md ">
        <div className="flex  items-center gap-1 rounded-lg ">
          {/* <MemberProfile profile={profile} /> */}
          <div className="px-2 " onClick={handleNavigate}>
            <p className="text-xs font-semibold">{name}</p>

            <p className="text-xs text-gray-600 flex flex-wrap ">{gender}</p>
          </div>
        </div>
        <div onClick={() => setShow(!show)}>
          <MdOutlineKeyboardArrowDown />
        </div>
        {show && (
          <div className=" py-2 bg-gray-500 rounded-xl z-10 absolute top-6 right-0 flex justify-center  ">
            <div className="p-2 m-1  ">
              <button
                className="w-full p-2 m-1 bg-gray-700 text-white flex justify-center rounded-md"
                onClick={() => {
                  handleEdit(value);
                  setShow();
                }}
              >
                <FaRegEdit />
              </button>
              <p className="w-full flex justify-center text-white">Edit</p>
            </div>
            <div className="p-2 m-1 ">
              <button
                className="w-full p-2 m-1 bg-red-500 text-white flex justify-center rounded-md"
                onClick={() => {
                  handleDelete(id);
                  setShow();
                }}
              >
                <AiTwotoneDelete />
              </button>

              <p className="w-full flex justify-center text-white">Delete</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListTeamMember;
