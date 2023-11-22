import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ThirdCart from "../Home/asidecarts/ThirdCart";
import SideBar from "../SideBar";
import { useQuery } from "@tanstack/react-query";
import { getSingleMember } from "../../../api/api";

const Members = () => {
  // const getData = useSelector((state) => state.member.totalMembers);
  const { id } = useParams();



  const { data} = useQuery({
    queryKey: ["member",id],
    queryFn:getSingleMember(id) ,
    staleTime: 10000,
  });
  console.log(data)
  // const data = getData.filter((value) => value.name === id);
  // const {  name, gender } = data?.[0] || {};

  // const newdata = getData.filter((value) => value.name !== id);

  // const { src } = id;
  // if (!profilepicture || !(profilepicture instanceof File)) {
  //   // Handle cases where profile is null or not a valid File object
  //   return <div></div>;
  // }
  return (
    <div className="flex">
      <SideBar />

      <div className="flex w-full">
        {/* main start */}
        <div className=" p-4 w-full py-16 ">
          {/* <div
            className="z-[-1] xl:w-[370px]  xl:h-[250px] w-[600px] h-[400px] bg-contain  bg-center bg-no-repeat  backdrop-blur-lg relative p-5 rounded-md border border-gray-300"
            style={{
              backgroundImage: `url(${URL.createObjectURL(profilepicture)})`,
            }}
          >
            <img
              src={URL.createObjectURL(profilepicture)}
              className="xl:h-[100px] h-[200px] xl:w-[100px] w-[200px]  rounded-[50px]  absolute bottom-0 border border-gray-300"
              alt=""
            />
          </div> */}
          <div className="p-5 bg-gray-300 rounded-b-md  bg-gradient-to-br from-blue-300 to-white w-[600px] xl:w-[370px]  ">
            <h1 className="xlBoldFont ">Name : {data?.name}</h1>
            <h3 className="xlBoldFont">Gender : {WebGLRenderbuffer?.gender}</h3>
          </div>
        </div>
        {/* main end */}

        {/* aside start */}
   ``     {/* <div className="p-5 flex flex-col gap-2 w-[400px] border-1 border-black bg-gradient-to-br from-blue-300 to-white h-screen">
          <ThirdCart getData={newdata} />
        </div> */}

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
