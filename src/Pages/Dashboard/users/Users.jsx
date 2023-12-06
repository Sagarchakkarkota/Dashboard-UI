// import { useQuery } from "@tanstack/react-query";
// import { getUsers } from "../../../lib/axios/apiServices/goRestQuery/goRestQuery";
// import SideBar from "../../../components/sidebar/SideBar";

// import { useState } from "react";

// const Users = () => {
//   const [pageNumber, setPageNumber] = useState(1);
//   const pageSize = 5;

//   const paginate = (data, pageNumber, pageSize) => {
//     const startIndex = (pageNumber - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     return data?.slice(startIndex, endIndex);
//   };

//   const { data, isLoading } = useQuery({
//     queryKey: ["users"],
//     queryFn: getUsers,
//     staleTime: 10000,
//   });

//   const handleNext = () => {
//     setPageNumber((prevPageNumber) => prevPageNumber + 1);
//   };

//   const handlePrev = () => {
//     setPageNumber((prevPageNumber) => prevPageNumber - 1);
//   };

//   const paginatedData = paginate(data, pageNumber, pageSize);

//   return (
//     <div className="flex lg:h-screen  bg-gradient-to-br from-[#A5D8F3] to-[#F5D300] ">
//       {/* <div className="flex "> */}
//       <SideBar />
//       <div>
//         {isLoading ? (
//           " ...Loading"
//         ) : (
//           <div className=" w-full p-4  ">
//             {/* Table start.... */}
//             <div className=" w-full">
//               <h1 className="xlBoldFont text-center mb-4 md:mb-6">User Data</h1>

//               <div className="w-full flex ">
//                 {/* Table header start.... */}
//                 <div className="tableBody ">Name</div>
//                 <div className="tableBody ">User Name</div>
//                 <div className="tableBody ">Mail Id</div>
//                 <div className="tableBody ">Phone</div>
//                 <div className="tableBody ">Website</div>
//                 <div className="tableBody ">Address</div>
//                 <div className="tableBody ">Company</div>
//               </div>
//               {/* Table header end.... */}

//               {/* Table body start */}
//               <div className="w-full flex flex-col xl:text-xs">
//                 {paginatedData?.map(
//                   ({
//                     id,
//                     name,
//                     phone,
//                     email,
//                     username,
//                     website,
//                     address,
//                     company,
//                   }) => (
//                     <div key={id} className="w-full flex flex-row">
//                       <div className="tableBody">{name}</div>
//                       <div className="tableBody">{username}</div>
//                       <div className="tableBody flex-shrink break-all  ">
//                         {email}
//                       </div>
//                       <div className="tableBody">{phone}</div>
//                       <div className="tableBody">{website}</div>

//                       <div className="tableBody flex-wrap ">
//                         <div className="w-full flex flex-wrap">
//                           {address.city}
//                         </div>

//                         <div className=" w-full flex flex-wrap">
//                           {address.street}
//                         </div>
//                         <div className=" w-full flex flex-wrap">
//                           {address.suite}
//                         </div>
//                         <div className=" w-full flex flex-wrap">
//                           {address.zipcode}
//                         </div>
//                       </div>
//                       <div className="tableBody flex-wrap">
//                         <div className="w-full flex flex-wrap">
//                           {company.bs}{" "}
//                         </div>
//                         <div className="w-full flex flex-wrap">
//                           {company.name}{" "}
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 )}
//               </div>

//               {/* Table body end */}
//             </div>
//             {/* Table end.... */}
//             {/* Next and Prev Button start...... */}
//             <div className="w-full flex justify-center">
//               {" "}
//               <button
//                 className="px-5 text-white"
//                 onClick={handlePrev}
//                 disabled={pageNumber === 1}
//               >
//                 Pev
//               </button>
//               <span className="text-white">
//                 {pageNumber}/ {Math.ceil(data.length / pageSize)}
//               </span>
//               <button
//                 className="px-5 text-white"
//                 onClick={handleNext}
//                 disabled={pageNumber === Math.ceil(data.length / pageSize)}
//               >
//                 Next
//               </button>
//             </div>
//             {/* Next and Prev Button end...... */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Users;

import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import { getUsers } from "src/lib/axios/apiServices/goRestQuery/goRestQuery";
import { HiDotsVertical } from "react-icons/hi";
const dataList = [
  {
    id: 1,
    name: "Rishabh",
    email: "test@gmail.com",
    phone: "899456870596",
    username: "rishabh",
    website: "www.test.com",
  },
  {
    id: 2,
    name: "Sagar",
    email: "saagr@gmail.com",
    phone: "9638527415",
    username: "sagar",
    website: "www.developer.com",
  },
  {
    id: 3,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 4,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 5,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 6,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 7,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 8,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },

  {
    id: 9,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 10,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 11,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 12,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 13,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 14,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },

  {
    id: 15,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
];

const Users = () => {
  // const {  isLoading } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getUsers,
  //   staleTime: 10000,
  // });

  const tableColumns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    // {
    //   header: "Name",
    //   accessorFn: (row) => `${row.name} ${row.username}`,
    // },
    // {
    //   header: "Name",
    //   columns: [
    //     {
    //       header: "Name",
    //       accessorKey: "name",
    //     },
    //     {
    //       header: "Username",
    //       accessorKey: "username",
    //     },
    //   ],
    // },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Username",
      accessorKey: "username",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone",
      accessorKey: "phone",
    },

    {
      header: "Website",
      accessorKey: "website",
      cell: (info) => <a href="https://www.google.co.in/">{info.getValue()}</a>,
    },
    {
      header: "Edit",
      accessorKey: "button",
      cell: ({ row }) => (
        <button onClick={() => alert(JSON.stringify(row.original))}>
          <HiDotsVertical />
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: dataList,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });
  console.log(table.getPaginationRowModel());
  return (
    <div className="w3-container">
      <table className="w3-table w3-striped">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table?.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <button
        className="border border-black px-2 mx-1"
        onClick={() => {
          table.setPageIndex(0);
        }}
      >
        firstpage
      </button> */}
      <button
        className="border border-black px-2 mx-1"
        onClick={() => {
          table.previousPage();
        }}
      >
        prev
      </button>
      {table.getPaginationRowModel}
      <button
        className="border border-black px-2 mx-1"
        onClick={() => {
          table.nextPage();
        }}
      >
        next
      </button>
      {/* <button
        className="border border-black px-2 mx-1"
        onClick={() => {
          table.setPageIndex(table.getPageCount() - 1);
        }}
      >
        lastpage
      </button> */}
    </div>
  );
};

export default Users;
