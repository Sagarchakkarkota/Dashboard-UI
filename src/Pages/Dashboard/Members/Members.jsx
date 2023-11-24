import { useParams } from "react-router-dom";
import ThirdCart from "../Home/asidecarts/ThirdCart";
import SideBar from "../SideBar";
import {  useQueryClient } from "@tanstack/react-query";

const Members = () => {


  const {id} = useParams();

  
  const queryClient = useQueryClient();
  const singleMember = queryClient.getQueryData(['member'])?.find((item)=>{return item.id==id})
 console.log(singleMember)
//singleMember received from cachedData 
  


  return (
    <div className="flex">
      <SideBar />

      <div className="flex w-full">
       
        <div className=" p-4 w-full py-16 ">
    
          <div className="p-5 bg-gray-300 rounded-b-md  bg-gradient-to-br from-blue-300 to-white w-[600px] xl:w-[370px]  ">
      
            <h1 className="xlBoldFont ">Name : {singleMember?.name}</h1>
            <h3 className="xlBoldFont">Gender : {singleMember?.gender}</h3>
         
          </div>
        
        </div>
        {/* main end */}

        {/* aside start */}
     <div className="p-4 flex flex-col gap-2 w-[400px]  border-1 border-black bg-gradient-to-br from-blue-300 to-white h-screen">
          <ThirdCart/>

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
