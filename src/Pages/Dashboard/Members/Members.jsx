import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListTeamMember from "../Home/components/ListTeamMember";
import ThirdCart from "../Home/asidecarts/ThirdCart";
import SideBar from "../SideBar";

const Members = () => {
  const getData = useSelector((state) => state.member.totalMembers);
  const { id } = useParams();

  const data = getData.filter((value) => value.name === id);
  const { profilepicture, name, occupation } = data?.[0] || {};

  const newdata = getData.filter((value) => value.name !== id);

  // const { src } = id;
  if (!profilepicture || !(profilepicture instanceof File)) {
    // Handle cases where profile is null or not a valid File object
    return <div></div>;
  }
  return (
    <div className="flex">
      <SideBar />

      <div className="flex ">
        {/* main start */}
        <div className=" p-5 w-full ">
          <div
            className="w-[600px] h-[400px] bg-contain  bg-center bg-no-repeat  backdrop-blur-lg relative p-5 rounded-md border border-gray-300"
            style={{
              backgroundImage: `url(${URL.createObjectURL(profilepicture)})`,
            }}
          >
            <img
              src={URL.createObjectURL(profilepicture)}
              className="h-[200px] w-[200px]  rounded-[50px]  absolute bottom-0 border border-gray-300"
              alt=""
            />
          </div>
          <div className="p-5 bg-gray-300 rounded-b-md  bg-gradient-to-br from-blue-300 to-white w-[600px]  ">
            <h1 className="xlBoldFont ">Name : {name}</h1>
            <h3 className="xlBoldFont">Occupation : {occupation}</h3>
          </div>
        </div>
        {/* main end */}

        {/* aside start */}
        <div className="p-5 flex flex-col gap-2 w-[400px] border-1 border-black bg-gradient-to-br from-blue-300 to-white h-screen">
          <ThirdCart getData={newdata} />
        </div>

        {/* aside end */}
      </div>
    </div>
  );
};

export default Members;

// import React from "react";

// const Members = () => {
//   return (
//     <div>
//       <h1>members</h1>
//     </div>
//   );
// };

// export default Members;
