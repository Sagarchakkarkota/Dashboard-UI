import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../api/api";
import SideBar from "../SideBar";

import { useState } from "react";

const Users = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 5;

  const headers = [
    " Name",
    "User Name",
    "Mail Id",
    "Phone",
    "Website",
    "Address",
    "Company",
  ];
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
    <div className="flex">
      <SideBar />
      <div>
        {isLoading ? (
          " ...Loading"
        ) : (
          <div className=" w-full p-4   bg-gradient-to-br from-[#A5D8F3] to-[#F5D300]">
            <div className="overflow-x-auto rounded-2xl p-6 md:p-10 ">
              <h1 className="xlBoldFont text-center mb-4 md:mb-6">User Data</h1>

              <div className=" my-4 md:my-6 ">
                <div className="bg-[#f8e0f7] grid grid-cols-7 md:grid-cols-8 gap-2 md:gap-4 px-2 md:px-6 py-3 md:py-4 text-sm text-gray-900 border-b border-gray-400 rounded-t-md">
                  {headers.map((header, index) => (
                    <div key={index}>
                      <div className="flex justify-center">{header}</div>
                    </div>
                  ))}
                </div>

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
                    <div
                      key={id}
                      className="bg-[#FFDEF3] grid grid-cols-7 md:grid-cols-8 gap-2 md:gap-4 px-2 md:px-6 py-3 md:py-4 text-sm text-gray-900 "
                    >
                      <div className="flex justify-center">{name}</div>
                      <div className="flex justify-center ">{username}</div>
                      <div className="flex justify-center flex-shrink break-all ">
                        {email}
                      </div>
                      <div className="flex justify-center">{phone}</div>
                      <div className="flex justify-center">{website}</div>
                      <div className="flex justify-center">
                        <div>
                          <p className="flex flex-wrap">
                            {address.city}, {address.street}, {address.suite},{" "}
                            {address.zipcode},{/* {address.geo}, */}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center ">
                        <div className="flex flex-wrap">
                          {company.bs},{company.name}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
