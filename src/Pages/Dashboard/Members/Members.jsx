import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ThirdCart from "../Home/asidecarts/ThirdCart";
import SideBar from "../SideBar";
import { useQuery } from "@tanstack/react-query";
import { getMember, getSingleMember } from "../../../api/api";

const Members = () => {
  // const getData = useSelector((state) => state.member.totalMembers);
  
  const param = useParams();
  console.log(param)

  

  const { data:singleData} = useQuery({
    queryKey: ["singleMember",param.id],
    queryFn:()=>getSingleMember(param.id) ,
    staleTime: 60000,


  });

  const { data:getData} = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
    staleTime: 10000,
  });



  return (
    <div className="flex">
      <SideBar />

      <div className="flex w-full">
       
        <div className=" p-4 w-full py-16 ">
    
          <div className="p-5 bg-gray-300 rounded-b-md  bg-gradient-to-br from-blue-300 to-white w-[600px] xl:w-[370px]  ">
      
            <h1 className="xlBoldFont ">Name : {singleData?.name}</h1>
            <h3 className="xlBoldFont">Gender : {singleData?.gender}</h3>
         
          </div>
        
        </div>
        {/* main end */}

        {/* aside start */}
     <div className="p-5 flex flex-col gap-2 w-[400px]  border-1 border-black bg-gradient-to-br from-blue-300 to-white h-screen">
          <ThirdCart getData={getData} />

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
