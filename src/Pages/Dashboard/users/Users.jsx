import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../api/api";
import SideBar from "../../../components/sidebar/SideBar";

import { useState } from "react";

const Users = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 5;

  const paginate = (data, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data?.slice(startIndex, endIndex);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 10000,
  });

  const handleNext = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const handlePrev = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  const paginatedData = paginate(data, pageNumber, pageSize);

  return (
    <div className="flex lg:h-screen  bg-gradient-to-br from-[#A5D8F3] to-[#F5D300] ">
      {/* <div className="flex "> */}
      <SideBar />
      <div>
        {isLoading ? (
          " ...Loading"
        ) : (
          <div className=" w-full p-4  ">
            {/* Table start.... */}
            <div className=" w-full">
              <h1 className="xlBoldFont text-center mb-4 md:mb-6">User Data</h1>

              <div className="w-full flex ">
                {/* Table header start.... */}
                <div className="tableBody ">Name</div>
                <div className="tableBody ">User Name</div>
                <div className="tableBody ">Mail Id</div>
                <div className="tableBody ">Phone</div>
                <div className="tableBody ">Website</div>
                <div className="tableBody ">Address</div>
                <div className="tableBody ">Company</div>
              </div>
              {/* Table header end.... */}

              {/* Table body start */}
              <div className="w-full flex flex-col xl:text-xs">
                {paginatedData?.map(
                  ({
                    id,
                    name,
                    phone,
                    email,
                    username,
                    website,
                    address,
                    company,
                  }) => (
                    <div key={id} className="w-full flex flex-row">
                      <div className="tableBody">{name}</div>
                      <div className="tableBody">{username}</div>
                      <div className="tableBody flex-shrink break-all  ">
                        {email}
                      </div>
                      <div className="tableBody">{phone}</div>
                      <div className="tableBody">{website}</div>

                      <div className="tableBody flex-wrap ">
                        <div className="w-full flex flex-wrap">
                          {address.city}
                        </div>

                        <div className=" w-full flex flex-wrap">
                          {address.street}
                        </div>
                        <div className=" w-full flex flex-wrap">
                          {address.suite}
                        </div>
                        <div className=" w-full flex flex-wrap">
                          {address.zipcode}
                        </div>
                      </div>
                      <div className="tableBody flex-wrap">
                        <div className="w-full flex flex-wrap">
                          {company.bs}{" "}
                        </div>
                        <div className="w-full flex flex-wrap">
                          {company.name}{" "}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Table body end */}
            </div>
            {/* Table end.... */}
            {/* Next and Prev Button start...... */}
            <div className="w-full flex justify-center">
              {" "}
              <button
                className="px-5 text-white"
                onClick={handlePrev}
                disabled={pageNumber === 1}
              >
                Pev
              </button>
              <span className="text-white">
                {pageNumber}/ {Math.ceil(data.length / pageSize)}
              </span>
              <button
                className="px-5 text-white"
                onClick={handleNext}
                disabled={pageNumber === Math.ceil(data.length / pageSize)}
              >
                Next
              </button>
            </div>
            {/* Next and Prev Button end...... */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
