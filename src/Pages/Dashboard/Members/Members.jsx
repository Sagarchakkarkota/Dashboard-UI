import { useParams } from "react-router-dom";
import ThirdCart from "../Home/components/asidesection/components/thirdCart/ThirdCart";
import SideBar from "../../../components/sidebar/SideBar";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMember } from "../../../lib/axios/apiServices/goRestQuery/goRestQuery";

const Members = () => {
  const { data: getData } = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
    staleTime: 60000,
  });

  const { id } = useParams();

  const queryClient = useQueryClient();
  const singleMember = queryClient.getQueryData(["member"])?.find((item) => {
    return item.id == id;
  });
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
          <ThirdCart ID={id} />
        </div>

        {/* aside end */}
      </div>
    </div>
  );
};

export default Members;
