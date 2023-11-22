import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MemberProfile from "./MemberProfile";
import { Link } from "react-router-dom";

const ListTeamMember = ({  id,name, gender }) => {

  return (
    <Link to={`/members/${id}`}>
      {/* // <Link to={`/members`}> */}
      <div className="flex items-center justify-between flex-row gap-4 my-3 bg-gray-100  px-2 py-1 rounded-md">
        <div className="flex  items-center gap-1 rounded-lg ">
          {/* <MemberProfile profile={profile} /> */}
          <div className="px-2 ">
            <p className="text-xs font-semibold">{name}</p>

            <p className="text-xs text-gray-600 flex flex-wrap ">{gender}</p>
          </div>
        </div>
        <MdOutlineKeyboardArrowRight />
      </div>
    </Link>
  );
};

export default ListTeamMember;
